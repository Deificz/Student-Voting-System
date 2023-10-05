import React, { useEffect, useState } from "react";
export default function vote_done({ userVotes, userName }) {
  const [candidates, setCandidates] = useState(null);
  const [candidateList, setCandidateList] = useState([]);

  //Loads candidates
  useEffect(() => {
    setCandidates(JSON.parse(localStorage.getItem("Candidates")));
  }, []);

  //Filters the candidates that the user only voted
  useEffect(() => {
    if (candidates !== null) {
      const filteredList = candidates.filter((candidate) =>
        userVotes.includes(candidate.id)
      );
      setCandidateList(filteredList);
      console.log(filteredList);
    }
    
  }, [candidates]);
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center p-5 mt-20 md:mt-16 2xl:mt-24 border-4 rounded-xl shadow-card md:px-32 md:py-10 2xl:px-44 border-color-blue">
        <h1 className="mb-10 text-2xl font-bold md:text-2xl 2xl:text-4xl ">
          Hi{" "}
          <span className="text-color-blue">
            {userName},
            <br />
          </span>
          here are your candidates.
        </h1>
        <div className="flex flex-col">
          {candidateList.map((candidate) => (
            <div key={candidate.id} className="flex flex-col items-center justify-center mb-5 2xl:mb-10">
              <h2 className="font-semibold md:text-2xl 2xl:text-4xl">{candidate.rolename}</h2>
              <h1 className="text-xl font-bold md:text-3xl text-color-blue 2xl:text-5xl 2xl:mt-3">{candidate.name}</h1>
            </div>
          )).sort((a,b) => a.id - b.id)}
        </div>
      </div>
    </div>
  );
}
