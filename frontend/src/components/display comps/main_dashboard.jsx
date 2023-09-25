import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../../utils/Contexts";

export default function main_dashboard() {
  const { currentPosView } = useContext(SidebarContext);
  const [candidates, setCandidates] = useState(
    JSON.parse(localStorage.getItem("Candidates"))
  );

  console.log(candidates);
  return (
    <>
      {currentPosView === "President" ? (
        <div className="flex justify-center h-[100dvh] w-[100dvw]">
          <div className="my-10 w-[250px] md:w-[600px] 2xl:w-[1000px] border-2 2xl:border-4 border-color-blue flex flex-col items-center p-3 md:p-5 rounded-3xl shadow-card">
            <h1 className="mt-5 mb-10 text-xl font-bold 2xl:mb-20 text-color-blue md:text-3xl 2xl:text-5xl">
              Tally for {`${currentPosView}`}
            </h1>
            <ol>
              {candidates
                .filter((candidate) => candidate.rolename === "President")
                .sort((a, b) => b.voteCount - a.voteCount)
                .map((candidate, index) => (
                  <li
                    key={candidate.id}
                    className="text-lg md:text-2xl 2xl:text-3xl"
                  >
                    {index + 1}. {candidate.name} - {candidate.voteCount}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      ) : currentPosView === "V. President" ? (
        <div className="flex justify-center h-[100dvh] w-[100dvw]">
          <div className="my-10 w-[250px] md:w-[600px] 2xl:w-[1000px] border-2 2xl:border-4 border-color-blue flex flex-col items-center p-3 md:p-5 rounded-3xl shadow-card">
            <h1 className="mt-5 mb-10 text-xl font-bold 2xl:mb-20 text-color-blue md:text-3xl 2xl:text-5xl">
              Tally for {`${currentPosView}`}
            </h1>
            <ol>
              {candidates
                .filter((candidate) => candidate.rolename === "Vice President")
                .sort((a, b) => b.voteCount - a.voteCount)
                .map((candidate, index) => (
                  <li
                    key={candidate.id}
                    className="text-lg md:text-2xl 2xl:text-3xl"
                  >
                    {index + 1}. {candidate.name} - {candidate.voteCount}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      ) : currentPosView === "Secretary" ? (
        <div className="flex justify-center h-[100dvh] w-[100dvw]">
          <div className="my-10 w-[250px] md:w-[600px] 2xl:w-[1000px] border-2 2xl:border-4 border-color-blue flex flex-col items-center p-3 md:p-5 rounded-3xl shadow-card">
            <h1 className="mt-5 mb-10 text-xl font-bold 2xl:mb-20 text-color-blue md:text-3xl 2xl:text-5xl">
              Tally for {`${currentPosView}`}
            </h1>
            <ol>
              {candidates
                .filter((candidate) => candidate.rolename === "Secretary")
                .sort((a, b) => b.voteCount - a.voteCount)
                .map((candidate, index) => (
                  <li
                    key={candidate.id}
                    className="text-lg md:text-2xl 2xl:text-3xl"
                  >
                    {index + 1}. {candidate.name} - {candidate.voteCount}
                  </li>
                ))}
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
