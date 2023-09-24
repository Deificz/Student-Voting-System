import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header.jsx";
import SideBar from "../../components/display comps/sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useVoteUtil } from "../../utils/VoteUtil.jsx";
export default function StudentHome() {

  //INITIALLY GET USER ID FOR VOTING RENDER
  const {setUserVotes} = useVoteUtil();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUserVotes(userData.id);
  },[]);

  return (
    <>
      <Header showNavbar={true} />
      <div className="flex h-[100dvh]">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
