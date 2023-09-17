import { useContext, useReducer } from "react";
import { VoteContext } from "./Contexts";


const initialState = {
    userVote: {},
    status: '',
}

const ACTIONS = {
    SET_USERVOTE: 'set_uservote',
    SET_STATUS: 'set_error'
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_USERVOTE:
            return {...state, userVote: action.payload}
        case ACTIONS.SET_STATUS:
            return {...state, status: action.payload}
        default:
            throw new Error("Unknown error")
    }
}

export function VoteUtilProvider ({children}){
    const [{userVote, status}, dispatch] = useReducer(reducer, initialState)

    async function setVote(voteData){
        try{
            const response = await fetch('http://localhost:8080/api/v1/candidate/vote',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(voteData)
            })
            if(response.ok){
                const responseData = response.json();
                dispatch({type: ACTIONS.SET_USERVOTE, payload: responseData});
            } else console.log("Failed to set")
        }catch{
            console.log('Failed to respond')
        }
    }

    const voteValues = {
        userVote,
        status,
        setVote
    }

    return(
        <VoteContext.Provider value={voteValues}>
            {children}
        </VoteContext.Provider>
    )
}

export function useVoteUtil(){
    const context = useContext(VoteContext);
    if(context === undefined)
        throw new Error('Context was used outside the provider')
    return context;
}