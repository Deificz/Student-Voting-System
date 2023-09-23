import { useState } from "react";
import Router from "./utils/Router";
import { SidebarContext } from "./utils/Contexts";

import { AuthProvider, useAuth } from "./utils/Auth";
import { CandidateProvider } from "./utils/Candidates";
import { VoteUtilProvider } from "./utils/VoteUtil";

function App() {
  const [currentPosView, setCurrentPosView] = useState("President");

  const posViewValues = {
    currentPosView,
    setCurrentPosView,
  };

  return (
    <>
      <SidebarContext.Provider value={posViewValues}>
        <AuthProvider>
          <CandidateProvider>
            <VoteUtilProvider>
              <Router />
            </VoteUtilProvider>
          </CandidateProvider>
        </AuthProvider>
      </SidebarContext.Provider>
    </>
  );
}

export default App;
