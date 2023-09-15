import React, { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};


function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "signup":
      return { ...state, user: action.payload, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [errorLog, setErrorLog] = useState(false);
  const [hasRegisteredSuccessfully, setHasRegisteredSuccessfully] =
    useState(false);
  const [{ user, isAuthenticated }, dispatch] = useReducer(
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
        setUserData(responseData);
        dispatch({ type: "login", payload: userData });
        localStorage.setItem('userData', JSON.stringify(responseData));
        localStorage.setItem('Auth', JSON.stringify(isAuthenticated));
        setErrorLog(false)
      } else setErrorLog(true);

    } catch (error) {
      console.log(error);
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
        setUserData(responseData);
        dispatch({ type: "signup", payload: userData });
        setHasRegisteredSuccessfully(true);
      } else console.log("Registration is aborted");
    } catch (error) {
      console.log(error);
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
        dispatch({ type: "logout"});
        console.log('Signed out');
        localStorage.removeItem('userData');
      } else console.log("Signing out is aborted");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        errorLog,
        isAuthenticated,
        login,
        logout,
        signup,
        hasRegisteredSuccessfully,
        setHasRegisteredSuccessfully,
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
