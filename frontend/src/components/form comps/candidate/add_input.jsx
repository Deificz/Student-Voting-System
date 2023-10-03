import React from "react";
import { useState } from "react";

export default function add_input({
  name,
  partylist,
  introduction,
  awards,
  platforms,
  setName,
  setPartylist,
  setIntroduction,
  setAwards,
  setPlatforms,
}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const partylists = [
    { id: 1, title: "Progressive Alliance" },
    { id: 2, title: "Unity Party" },
    { id: 3, title: "Green Visionaries" },
    { id: 4, title: "Innovation Forward" },
    { id: 5, title: "Equality for All" },
  ];
  const handleInput = (e) => {
    if (e.target.value) setIsEmpty(false);
    else setIsEmpty(true);

    name
      ? setName(e.target.value)
      : partylist
      ? setPartylist(e.target.value)
      : introduction
      ? setIntroduction(e.target.value)
      : awards
      ? setAwards(e.target.value.split(","))
      : platforms
      ? setPlatforms(e.target.value.split(","))
      : "";
  };

  return (
    <div
      className={`flex flex-col mb-3 col-start-${
        name
          ? "1"
          : partylist
          ? "1"
          : introduction
          ? "2"
          : awards
          ? "1"
          : platforms
          ? "2"
          : ""
      } ${introduction ? "row-span-2" : ""}
      row-start-${
        name
          ? "2"
          : partylist
          ? "3"
          : introduction
          ? "2"
          : awards
          ? "4"
          : platforms
          ? "4"
          : ""
      }`}
    >
      <label htmlFor="first-name" className="md:text-lg 2xl:text-2xl">
        {name
          ? "Name"
          : partylist
          ? "Partylist"
          : introduction
          ? "Introduction"
          : awards
          ? "Awards"
          : platforms
          ? "Platforms"
          : ""}
      </label>
      {introduction ? (
        <textarea
          required
          placeholder="I'm Juan Dela Cruz"
          rows="4"
          onChange={handleInput}
          className="border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:mr-10 md:text-xl 2xl:text-3xl md:w-[350px] 2xl:w-[600px] transition-all duration-500"
        ></textarea>
      ) : partylist ? (
        <select onChange={handleInput} className="border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:mr-10 md:text-xl 2xl:text-3xl md:w-[350px] 2xl:w-[600px] transition-all duration-500" >
          <option value="">Select a Partylist</option>
            {partylists
                .map((party) => (
                  <option key={party.id} value={party.id}>
                    {party.title}
                  </option>
                ))}
        </select>
      ) : (
        <input
          type="text"
          className={`border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:mr-10 md:text-xl 2xl:text-3xl md:w-[350px] 2xl:w-[600px] transition-all duration-500
                                       ${
                                         awards || platforms
                                           ? ""
                                           : "valid:border-color-green valid:bg-green-200"
                                       }
                                       ${
                                         isEmpty
                                           ? ""
                                           : "invalid:border-color-red invalid:bg-red-200"
                                       }`}
          placeholder={
            name
              ? "Juan Dela Cruz"
              : awards
              ? "Award 1,Award 2,Award 3"
              : platforms
              ? "Platform 1,Platform 2,Platform 3"
              : ""
          }
          required
          onChange={handleInput}
        />
      )}
    </div>
  );
}
