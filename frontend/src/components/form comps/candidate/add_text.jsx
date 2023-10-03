import React from "react";
import { useState } from "react";

export default function add_text({
  first_name,
  last_name,
  partylist,
  introduction,
  awards,
  platforms,
  setFirstName,
  setLastName,
  setPartylist,
  setIntroduction,
  setAwards,
  setPlatforms,
}) {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = (e) => {
    if (e.target.value) setIsEmpty(false);
    else setIsEmpty(true);

        first_name
      ? setFirstName(e.target.value)
      : last_name
      ? setLastName(e.target.value)
      : "";
  };

  return (
    <div
      className={`flex flex-col mb-3 col-start-${
          first_name
          ? "1"
          : last_name
          ? "2"
          : partylist
          ? "1"
          : introduction
          ? "2"
          : awards
          ? "1"
          : platforms
          ? "2"
          : ""
      } row-start-${
          first_name
          ? "2"
          : last_name
          ? "2"
          : partylist
          ? "3"
          : introduction
          ? "3"
          : awards
          ? "1"
          : platforms
          ? "1"
          : ""
      }`}
    >
      <label htmlFor="first-name" className="md:text-lg 2xl:text-2xl">
        {   first_name
          ? "First Name"
          : last_name
          ? "Last Name"
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
      <input
        type="text"
        className={`border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:mr-10 md:text-xl 2xl:text-3xl md:w-[350px] 2xl:w-[600px] transition-all duration-500
                                      valid:border-color-green valid:bg-green-200
                                      ${
                                        isEmpty
                                          ? ""
                                          : "invalid:border-color-red invalid:bg-red-200"
                                      }`}
        placeholder={
            first_name
            ? "Juan" 
            : last_name
            ? "Dela Cruz"
            : partylist
            ? "Avengers"
            : ""
        }
        required
        onChange={handleInput}
      />
    </div>
  );
}
