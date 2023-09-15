import { useState } from "react";
import Router from "./utils/Router";
import { SidebarContext } from "./utils/Contexts";

import { AuthProvider, useAuth } from "./utils/Auth";
import { CandidateProvider } from "./utils/Candidates";

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
                <Router />
              </CandidateProvider>
            </AuthProvider>
        </SidebarContext.Provider>
      
    </>
  );
}

export default App;
