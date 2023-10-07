import React from "react";
import { useCandidates } from "../../../../utils/Candidates";

export default function delete_modal({
  currentId,
  setOpenDelModal,
  setCandidates,
}) {
  const { getCandidates, removeCandidateById } = useCandidates();
  const handleDelete = async (id) => {
    try {
      await removeCandidateById(id);
      await getCandidates();
      setCandidates(JSON.parse(localStorage.getItem("Candidates")));
      setOpenDelModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <dialog className="z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center px-2 py-5 bg-white border-2 border-black md:px-7 md:py-10 md:ml-44 rounded-2xl">
          <h1 className="mb-5 text-lg font-semibold md:text-2xl">
            Are you sure to delete this candidate?
          </h1>
          <div className="flex items-center justify-between px-24">
            <button
              className="px-5 mr-2 text-center text-gray-700 transition-all duration-300 border-2 md:py-1 md:text-3xl bg-color-green hover:text-black hover:border-color-green hover:bg-white rounded-2xl"
              onClick={() => handleDelete(currentId)}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="px-5 text-center text-gray-700 transition-all duration-300 border-2 md:py-1 md:text-3xl bg-color-red hover:text-black hover:border-color-red hover:bg-white rounded-2xl"
              onClick={() => setOpenDelModal(false)}
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
