import React, { useEffect, useState } from "react";
import { useCandidates } from "../../../utils/Candidates";
import { Link } from "react-router-dom";
import AddModal from "./modals/add_modal";
import DeleteModal from "./modals/delete_modal";
export default function candidate_card({ position }) {

  //For utilities
  const { status } = useCandidates();
  const [isAdmin, setIsAdmin] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDelModal] = useState(false);
 
  //Loads the candidate
  const [candidates, setCandidates] = useState(
    JSON.parse(localStorage.getItem("Candidates"))
  );
  const [currentId, setId] = useState(null);
  
  const handleDeleteBtn = (id) => {
    setOpenDelModal(true);
    setId(id);
  }
  //Check if the user is an admin
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [role] = userData.roles;
    const boolAdmin = role === "ROLE_ADMIN";

    setIsAdmin(boolAdmin);
  }, []);

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col items-center">
      <div
        className={`mt-20 md:mt-14 md:border-b-2 border-color-blue w-10/12 pb-5 flex flex-col md:flex-row items-center md:items-end ${
          isAdmin ? "justify-between" : "justify-center"
        } text-3xl text-center 2xl:text-4xl`}
      >
        <h1>{position}</h1>
        {isAdmin && (
          <button onClick={() => setOpenAddModal(true)}>
            <i className="p-3 mt-5  text-black transition-all duration-300 bg-white border-4 rounded-full fa-solid fa-plus hover:text-white hover:bg-color-green hover:border-color-green border-color-green"></i>
          </button>
        )}
      </div>

      <div
        id="candidate-panel"
        className="flex flex-wrap px-4 md:overflow-y-auto justify-evenly w-full"
      >
        {status === 'Done' ?
          candidates
            .filter((person) => person.rolename === position)
            .map((candidate) => (
              <div
                key={candidate.id}
                className="flex flex-col mr-5 justify-between h-[350px] w-[230px] md:w-[300px] md:h-[400px] 2xl:w-[400px] 2xl:h-[450px] border-2 my-10 border-color-blue rounded-xl shadow-card hover:-translate-y-3 transition-all duration-300 px-2 py-4"
              >
                {isAdmin && (
                  <button onClick={() => handleDeleteBtn(candidate.id) } className="self-end w-10 min-h-10 mr-3 text-gray-200 transition-all duration-300 border-4 border-white rounded-full bg-color-red hover:text-black hover:bg-white hover:border-color-red" >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                )}
                <div className="flex items-center">
                  
                  <img src={candidate.image} className="h-[80px] w-[80px] bg-black rounded-full text-white flex justify-center items-center"/>   
                 
                  <h1 className="ml-5 font-semibold text-md md:text-xl 2xl:text-3xl">
                    {candidate.name}{" "}
                    <span className="text-xs md:text-md 2xl:text-xl">
                      <br />
                      {candidate.partylist}
                    </span>
                  </h1>
                </div>
                <p className="px-5 text-sm text-center md:text-lg 2xl:text-2xl">
                  {candidate.introduction}
                </p>
                <Link to={`/home/candidate/${candidate.id}`}>
                  <h1 className="mr-5 text-xs font-bold text-right transition-all duration-300 cursor-pointer md:text-md 2xl:text-xl hover:text-color-blue">
                    View more..
                  </h1>
                </Link>
              </div>
            )) : <h1>Loading..</h1>}
        </div>
        
        {openAddModal && <AddModal setOpenAddModal={setOpenAddModal} position={position} setCandidates={setCandidates}/>}
        {openDeleteModal && <DeleteModal setOpenDelModal={setOpenDelModal} currentId={currentId} setCandidates={setCandidates} />}
    </div>
    
  );
}
