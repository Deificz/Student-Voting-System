import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCandidates } from "../../../utils/Candidates";
export default function candidate_info() {
  const { getCandidateById, status } = useCandidates();
  const [currentCandidate, setCurrentCandidate] = useState();
  const [isDone, setIsDone] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getCandidateById(id);
  }, []);

  useEffect(() => {
    status === "Done" ? setIsDone(true) : setIsDone(false);
    setCurrentCandidate(JSON.parse(localStorage.getItem('currentCandidate')));
  },[status]);
 
  
  return (
    <>
      {isDone ? (
        <div
          id="candidate-panel"
          className="flex flex-col items-center w-[100dvw] h-[100dvh] px-5 pt-10 md:overflow-y-scroll"
        >
          <Link
            to="/home/candidates"
            className="self-end mr-10 text-4xl font-bold cursor-pointer text-color-blue md:text-6xl 2xl:text-8xl"
          >
            <i className="fa-solid fa-circle-arrow-left"> </i>
          </Link>
          <div className="min-h-[80px] min-w-[80px] md:min-h-[150px] md:min-w-[150px] 2xl:min-h-[200px] 2xl:min-w-[200px] md:mb-3 bg-black rounded-full text-white flex justify-center items-center mt-12 ">
            Logo
          </div>

          <h1 className="mt-5 text-xl font-semibold md:text-2xl 2xl:text-4xl">
            {currentCandidate.name}
          </h1>
          <h2 className="text-xl font-semibold md:text-2xl 2xl:text-4xl">
            {currentCandidate.partylist}
          </h2>

          <div className="mt-10 flex flex-col justify-center w-[50dvw] pl-5 2xl:pl-10  py-10 rounded-xl md:border-2 mb-10 border-color-blue md:shadow-card">
            <h3 className="mb-5 text-xl font-bold md:text-xl 2xl:text-4xl">
              Introduction
            </h3>
            <p className="md:text-lg 2xl:text-3xl">
              {currentCandidate.introduction}
            </p>
            <h3 className="mt-5 mb-5 text-xl font-bold md:text-xl 2xl:text-4xl">
              Awards
            </h3>
            {currentCandidate.awards.map(award =>  <p className="md:text-lg 2xl:text-3xl">
            {`• ${award}`}
            </p>)}
            <h3 className="mt-5 mb-5 font-bold mttext-xl md:text-xl 2xl:text-4xl">
              Platforms
            </h3>
            {currentCandidate.platforms.map(platform =>  <p className="md:text-lg 2xl:text-3xl">
              {`• ${platform}`}
            </p>)}
          </div>
        </div>
      ) : <h1>Loading</h1>}
    </>
  );
}
