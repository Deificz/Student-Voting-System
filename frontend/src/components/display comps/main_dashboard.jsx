import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../../utils/Contexts";
import Tally from "./dashboard comps/dashboard_tally";
export default function main_dashboard() {
  const { currentPosView } = useContext(SidebarContext);

  return (
    <>
      {currentPosView === 'President' ? <Tally position = 'President' /> :
       currentPosView === 'V. President' ? <Tally position = 'Vice President' /> :
       currentPosView === 'Secretary' ? <Tally position = 'Secretary' /> :
       currentPosView === 'Treasurer' ? <Tally position = 'Treasurer' /> :
       currentPosView === 'Auditor' ? <Tally position = 'Auditor' /> :
       currentPosView === 'P.R.O' ? <Tally position = 'Public Relations Officer' /> : ''}
    </>
  );
}
