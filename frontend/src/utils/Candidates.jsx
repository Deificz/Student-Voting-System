import React, { useContext, useReducer } from "react";
import { CandidateContext } from "./Contexts";

const initialState = {
  status: "",
  isError: false,
  candidates: {},
  currentCandidate: {},
};

const ACTIONS = {
  SET_LOADING: "set_loading",
  SET_ERROR: "set_error",
  LOAD_CANDIDATE: "load_candidate",
  SET_CURRENT_CANDIDATE: `set_current_candidate`,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, status: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, isError: true };
    case ACTIONS.LOAD_CANDIDATE:
      return { ...state, candidates: action.payload };
    case ACTIONS.SET_CURRENT_CANDIDATE:
      return { ...state, currentCandidate: action.payload };
    default:
      throw new Error("Unknown error");
  }
};

export function CandidateProvider({ children }) {
  const [{ status, isError, candidates, currentCandidate }, dispatch] =
    useReducer(reducer, initialState);

  async function getCandidates() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/candidate");
      dispatch({ type: ACTIONS.SET_LOADING, payload: "Loading" });
      if (response.ok) {
        
        const candidateData = await response.json();
        localStorage.setItem("Candidates", JSON.stringify(candidateData));
        dispatch({ type: ACTIONS.LOAD_CANDIDATE, payload: candidateData });
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Done" });
      } else {
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Error" });

        console.log("Failed to execute");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.SET_ERROR });
    }
  }

  async function addCandidate(name, partylist, introduction, candidateRole, awards,platforms) {
    try{
       const response = await fetch("http://localhost:8080/api/v1/candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          partylist: partylist,
          introduction: introduction,
          candidateRole: candidateRole,
          awards: awards,
          platforms: platforms,
        }),
      })

      if(response.ok){
        const candidateData = await response.json();
        console.log(candidateData);
      }else{
        console.log("Server failed to respond");
      }

    }catch(error){
      console.log(error);
      console.log('Failed to fetch')
    }
  }

  async function getCandidateById(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/candidate/${id}`
      );

      if (response.ok) {
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Loading" });
        const candidateData = await response.json();
        localStorage.setItem("currentCandidate", JSON.stringify(candidateData));
        dispatch({
          type: ACTIONS.SET_CURRENT_CANDIDATE,
          payload: candidateData,
        });
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Done" });
      } else {
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Error" });

        console.log("Failed to execute");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.SET_ERROR });
    }
  }

  async function removeCandidateById(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/candidate/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      
      if(response.ok){
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Loading" });
        const responseData = await response.json();
        console.log(responseData);
        dispatch({ type: ACTIONS.SET_LOADING, payload: "Done" });
      }else{
        dispatch({type: ACTIONS.SET_ERROR, payload: "Server failed to respond"});
        console.log("Server did not respond: Failed to delete");
      }
    } catch {
      dispatch({type: ACTIONS.SET_ERROR, payload: "Error"});
      console.log("Failed to delete");
    }
  }

  const candidateValues = {
    candidates,
    currentCandidate,
    getCandidates,
    addCandidate,
    getCandidateById,
    removeCandidateById,
    isError,
    status,
  };

  return (
    <CandidateContext.Provider value={candidateValues}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidates() {
  const context = useContext(CandidateContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");
  return context;
}
