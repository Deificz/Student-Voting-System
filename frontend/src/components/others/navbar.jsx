import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/Auth";

export default function Nav() {
  const { logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(true);
  const [currentAuth, setCurrentAuth] = useState(true);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!currentAuth) {
      navigate("/", { replace: true });
    }
  }, [currentAuth, navigate]);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);
    const [role] = userData.roles;

    if (role === "ROLE_USER") setIsAdmin(false);
    else setIsAdmin(true);
  }, []);

  const handleSignout = async () => {
    logout();
    setCurrentAuth(false);
  };

  const handleNav = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <nav>
        <ul>
          <i
            className={`fa-solid fa-bars cursor-pointer text-2xl block md:hidden`}
            onClick={handleNav}
          ></i>
          <div
            className={`grid grid-rows-[.5fr_1fr_2fr] md:flex md:flex-row items-center md:justify-between transition-all duration-300 sm_max:rounded-l-3xl
                          sm_max:justify-evenly sm_max:fixed sm_max:top-0 sm_max:h-[100%] 
                        sm_max:bg-white sm_max:border-color-blue sm_max:border-l-2 
                          sm_max:right-0 sm_max:pl-5 sm_max:text-2xl
                          ${
                            isOpen
                              ? "sm_max:right-[0px]"
                              : "sm_max:right-[-200px]"
                          }`}
            onClick={handleNav}
          >
            <i className="mr-3 text-3xl cursor-pointer fa-regular fa-circle-xmark md:hidden justify-self-end"></i>
            <div className="flex flex-col px-3 md:flex-row ">
              <Link to="/home/candidates">
                <li className="mr-10 font-semibold text-xl 2xl:text-3xl sm_max:mb-5 sm_max:border-l-2 sm_max:border-color-blue sm_max:pl-3">
                  Home
                </li>
              </Link>
              {isAdmin ? (
                <Link to="/dashboard">
                  <li className="text-xl font-semibold 2xl:text-3xl  sm_max:border-l-2 sm_max:border-color-blue sm_max:pl-3">
                    Dashboard
                  </li>
                </Link>
              ) : (
                <Link to="/vote">
                  <li className="text-xl font-semibold 2xl:text-3xl  sm_max:border-l-2 sm_max:border-color-blue sm_max:pl-3">Vote</li>
                </Link>
              )}
            </div>
            <button
              onClick={handleSignout}
              type="button"
              className="mr-5 text-xl font-semibold 2xl:text-3xl"
            >
              Sign out
            </button>
          </div>
        </ul>
      </nav>
    </>
  );
}
