import { useState } from "react";
import Router from "./utils/Router";
import { SidebarContext } from "./utils/Contexts";
import { UserViewContext, UserDataContext } from "./utils/Contexts";
import { AuthProvider, useAuth } from "./utils/Auth";

function App() {
  const [currentPosView, setCurrentPosView] = useState("President");
  const [isAdmin, setisAdmin] = useState(false);

  const posViewValues = {
    currentPosView,
    setCurrentPosView,
  };

  const userViewValues = {
    isAdmin,
    setisAdmin,
  };

  return (
    <>
      <UserViewContext.Provider value={userViewValues}>
        <SidebarContext.Provider value={posViewValues}>
            <AuthProvider>
              <Router />
            </AuthProvider>
        </SidebarContext.Provider>
      </UserViewContext.Provider>
    </>
  );
}

export default App;
