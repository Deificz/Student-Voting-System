import React, { useEffect, useState } from "react";
import Nav from "./others/navbar";
import { Link } from "react-router-dom";
import { useCandidates } from "../utils/Candidates";
export default function Header({ showNavbar }) {
  const [Auth, setAuth] = useState(false);
  const {getCandidates} = useCandidates();

  useEffect(() => {
    const initAuth = localStorage.getItem("Auth") === "true";
    setAuth(initAuth);
    getCandidates();
  }, []);

  return (
    <>
      <header className="p-5 shadow-xl grid items-center grid-cols-[7fr_1fr] md:grid-cols-[.8fr_1fr] sticky top-0 bg-white z-30">
        <div className="flex items-center ">
          <div className="flex items-center justify-center w-16 h-16 mr-3 rounded-full bg-slate-400 ">
            Logo
          </div>
          <Link to={Auth ? "/home/candidates" : "/"}>
            <h1 className="text-3xl font-extrabold text-color-blue 2xl:text-4xl">
              Student Election
            </h1>
          </Link>
        </div>
        {showNavbar && <Nav />}
      </header>
    </>
  );
}
