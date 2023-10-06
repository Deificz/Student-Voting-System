import React, { createContext, useContext, useReducer, useState } from "react";
import { AuthContext } from "./Contexts";

const initialState = {
  user: null,
  isAuthenticated: false,
  login_status: '',
  register_status: '',
  isRegistered: false,
};

const ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
  LOGIN_STATUS: 'login_status',
  REGISTER_STATUS: 'register_status'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true, login_error:false};
    case ACTIONS.LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    case ACTIONS.REGISTER:
      return { ...state, user: action.payload, isAuthenticated: false, isRegistered:true };
    case ACTIONS.LOGIN_STATUS:
      return {...state, login_status: action.payload};
    case ACTIONS.REGISTER_STATUS:
        return {...state, register_status: action.payload}
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  
  const [{ user, isAuthenticated, login_status, register_status, isRegistered }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function login(email, password) {
    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log("Login successful");
        dispatch({ type: ACTIONS.LOGIN, payload: responseData});
        localStorage.setItem('userData', JSON.stringify(responseData));
        dispatch({type: ACTIONS.LOGIN_STATUS, payload: 'Success'});
      } else {
        dispatch({type: ACTIONS.LOGIN_STATUS, payload: 'Error'});
        setTimeout(() => dispatch({type: ACTIONS.LOGIN_STATUS, payload: 'Retry'}),4000);
      }

    } catch {
      console.log("Log in is aborted");
    }
  }

  async function signup(
    studentNumber,
    email,
    firstName,
    lastName,
    middleName,
    password
  ) {
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentNumber: studentNumber,
          email: email,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          password: password,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        console.log("Register successful");
        dispatch({ type: ACTIONS.REGISTER, payload: responseData });
        dispatch({type: ACTIONS.REGISTER_STATUS, payload: 'Success'});
      } else {
        dispatch({type: ACTIONS.REGISTER_STATUS, payload: 'Error'});
        setTimeout(() => dispatch({type: ACTIONS.REGISTER_STATUS, payload: 'Retry'}),4500);
      }
    } catch {
      console.log("Registration is aborted");
    }
  }

  async function logout() {
    dispatch({ type: "logout" });
    try {
      const response = await fetch("http://localhost:8080/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log('Signed out');
        localStorage.removeItem('userData');
        localStorage.removeItem('userData');
        localStorage.setItem('Auth', false);
      } else console.log("Signing out is aborted");

    } catch  {
      console.log("Signing out is aborted");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login_status,
        register_status,
        isRegistered,
        isAuthenticated,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
