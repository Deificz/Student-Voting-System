import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

const CandidateContext = createContext();

const initialState = {
  status: '',
  isError: false,
  candidates: {},
}

const ACTIONS = {
  SET_LOADING: 'set_loading',
  SET_ERROR: 'set_error',
  LOAD_CANDIDATE: 'load_candidate',
}

const reducer = (state,action) => {
  switch(action.type){
    case ACTIONS.SET_LOADING:
      return {...state, status: action.payload}
    case ACTIONS.SET_ERROR:
      return {...state, isError: true}
    case ACTIONS.LOAD_CANDIDATE:
      return {...state, candidates: action.payload}
    default:
      throw new Error("Unknown error")
  }
}

export function CandidateProvider({children}) {
  const[{status, isError, candidates }, dispatch] = useReducer(reducer, initialState);


  async function getCandidates(){
    try{
      const response = await fetch('http://localhost:8080/api/v1/candidate');

      if(response.ok){
        dispatch({type: ACTIONS.SET_LOADING, payload: 'Loading'});
        const candidateData = await response.json();
        dispatch({type: ACTIONS.LOAD_CANDIDATE, payload: candidateData});
        dispatch({type: ACTIONS.SET_LOADING, payload: 'Done'});
      }else{
        dispatch({type: ACTIONS.SET_LOADING, payload: 'Error'});
        
        console.log('Failed to execute');
      }

    }catch(error){
      console.log(error);
      dispatch({type:ACTIONS.SET_ERROR});
    }
  }


const candidateValues = {
    candidates, 
    getCandidates,
    isError,
    status,
}

  return(
    <CandidateContext.Provider value = {candidateValues}>
      {children}
    </CandidateContext.Provider>
  )
}

export function useCandidates() {
  const context = useContext(CandidateContext);
  if(context === undefined)
    throw new Error('Context was used outside the provider');
  return context;
}

