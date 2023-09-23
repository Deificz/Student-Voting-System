import React from "react";
import { useState } from "react";

export default function type_text({
  first_name,
  middle_name,
  last_name,
  stud_num,
  setStudentNum,
  setFirstName,
  setMiddleName,
  setLastName,
}) {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = (e) => {
    if (e.target.value) setIsEmpty(false);
    else setIsEmpty(true);

    stud_num
      ? setStudentNum(e.target.value)
      : first_name
      ? setFirstName(e.target.value)
      : middle_name
      ? setMiddleName(e.target.value)
      : last_name
      ? setLastName(e.target.value)
      : "";
  };

  return (
    <div
      className={`flex flex-col mb-3 col-start-1 row-start-${
        stud_num
          ? "2"
          : first_name
          ? "3"
          : middle_name
          ? "4"
          : last_name
          ? "5"
          : ""
      }`}
    >
      <label htmlFor="first-name" className="md:text-lg 2xl:text-2xl">
        {first_name
          ? "First Name"
          : middle_name
          ? "Middle Name"
          : last_name
          ? "Last Name"
          : stud_num
          ? "Student Number"
          : ""}
      </label>
      <input
        type="text"
        className={`border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:text-xl 2xl:text-3xl md:w-[350px] 2xl:w-[600px] transition-all duration-500
                                      valid:border-color-green valid:bg-green-200
                                      ${
                                        isEmpty
                                          ? ""
                                          : "invalid:border-color-red invalid:bg-red-200"
                                      }`}
        placeholder={
          stud_num
            ? "2023-12345-MN-0"
            : first_name
            ? "Juan"
            : middle_name
            ? "Sicario"
            : last_name
            ? "Dela Cruz"
            : ""
        }
        required
        onChange={handleInput}
      />
    </div>
  );
}
