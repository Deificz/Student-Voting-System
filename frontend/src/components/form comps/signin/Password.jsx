import React from "react";

export default function Password({ setPassword }) {
  const handleInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col mb-3">
      <label htmlFor="" className="md:text-xl 2xl:text-3xl 2xl:mb-3">
        Password
      </label>
      <input
        type="password"
        className="border-black bg-color-gray focus:bg-white transition-all duration-300 focus:outline-color-blue border-2 mt-2 rounded-lg px-5 py-4 md:text-2xl 2xl:text-4xl w-[240px] md:w-[350px] 2xl:w-[500px]"
        required
        onChange={handleInput}
      />
    </div>
  );
}
