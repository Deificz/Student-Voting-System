import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useCandidates } from "../utils/Candidates";

export default function Hero() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-full lg:h-[60vh] w-full 2xl:h-[70vh] mt-16">
        <div className="flex flex-col justify-center items-center h-[400px] 2xl:h-[600px] p-10 w-[80vw] lg:w-[30vw] border-4 border-solid border-color-blue rounded-3xl shadow-card">
          <h1 className="text-lg text-center text-color-blue 2xl:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            imperdiet vitae lorem vitae scelerisque. Maecenas a faucibus sem,
            non blandit leo.
          </h1>
          <Link to="/option">
            <button className="p-5 mt-10 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-color-blue 2xl:p-8 2xl:text-3xl 2xl:mt-16 shadow-button hover:bg-white hover:text-color-blue border-color-blue">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
