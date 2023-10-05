import React, { useEffect, useState } from "react";
import Text from "../../../form comps/candidate/add_input";
import { useCandidates } from "../../../../utils/Candidates";
export default function add_modal({ closeModal, setCandidates, currentCandidate }) {

  const { updateCandidate, getCandidates } = useCandidates();

  const [name, setName] = useState("");
  const [partylist, setPartylist] = useState(null);
  const [introduction, setIntroduction] = useState("");
  const [awards, setAwards] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateCandidate(
        currentCandidate.id,
        name,
        partylist,
        introduction,
        currentCandidate.roleId,
        awards,
        platforms
      );
      await getCandidates();
      setCandidates(JSON.parse(localStorage.getItem("Candidates")));
      closeModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog className="z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
      <form
        action=""
        method="PUT"
        onSubmit={handleSubmit}
        className="flex flex-col grid-cols-2 p-5 mt-10 mb-10 bg-white border-2 md:grid border-color-blue rounded-2xl md:ml-28"
      >
        <div className="grid grid-cols-2 col-span-2 ">
          <h1 className="row-start-2 mb-5 text-2xl font-semibold md:text-3xl 2xl:text-4xl">
            Update Candidate
          </h1>
          <button
            className="col-start-2 justify-self-end"
            onClick={() => closeModal(false)}
          >
            <i className="text-3xl transition-all duration-300 fa-regular fa-circle-xmark hover:text-color-red md:text-4xl 2xl:text-5xl"></i>
          </button>
        </div>
        <Text name={true} setName={setName} />
        <Text partylist={true} setPartylist={setPartylist} />
        <Text introduction={true} setIntroduction={setIntroduction} />
        <Text awards={true} setAwards={setAwards} />
        <Text platforms={true} setPlatforms={setPlatforms} />
        <button
          type="submit"
          onSubmit={() => navigate("/option")}
          className="col-start-2 px-16 py-5 mt-5 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg justify-self-end bg-color-blue 2xl:p-8 2xl:text-3xl shadow-button md:w-fit hover:bg-white hover:text-color-blue border-color-blue"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
}
