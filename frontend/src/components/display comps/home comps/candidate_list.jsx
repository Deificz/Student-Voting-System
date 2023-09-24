import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../utils/Contexts.jsx";
import CandidateCard from "./candidate_card.jsx";
export default function candidate_list() {
  const { currentPosView } = useContext(SidebarContext);

  return (
    <>
      {currentPosView === "President" ? (
        <CandidateCard position="President" />
      ) : currentPosView === "V. President" ? (
        <CandidateCard position="Vice President" />
      ) : currentPosView === "Secretary" ? (
        <CandidateCard position="Secretary" />
      ) : (
        ""
      )}
    </>
  );
}
