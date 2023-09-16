import React, { createContext, useContext, useReducer, useState } from "react";
import { AuthContext } from "./Contexts";

const initialState = {
  user: null,
  isAuthenticated: false,
  login_error: false,
  isRegistered: false,
};

const ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
  LOGIN_ERROR: 'login_error'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true, login_error:false};
    case ACTIONS.LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    case ACTIONS.REGISTER:
      return { ...state, user: action.payload, isAuthenticated: false, isRegistered:true };
    case ACTIONS.LOGIN_ERROR:
      return {...state, login_error: true}
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  
  const [{ user, isAuthenticated, login_error, isRegistered }, dispatch] = useReducer(
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
        localStorage.setItem('Auth', JSON.stringify(isAuthenticated));
      } else  dispatch({type: ACTIONS.LOGIN_ERROR})

    } catch {
      dispatch({type: ACTIONS.LOGIN_ERROR})
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
      } else console.log("Registration is aborted");
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
      } else console.log("Signing out is aborted");

    } catch  {
      console.log("Signing out is aborted");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login_error,
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
