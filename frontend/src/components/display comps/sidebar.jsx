import React, { useContext, useState } from "react";
import { SidebarContext } from "../../utils/Contexts.jsx";
import { useSearchParams } from "react-router-dom";

export default function sidebar() {
  const { setCurrentPosView } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const data = [
    { id: 1, title: "President" },
    { id: 2, title: "V. President" },
    { id: 3, title: "Secretary" },
    { id: 4, title: "Treasurer" },
    { id: 5, title: "Auditor" },
    { id: 6, title: "P.R.O" },
  ];
  const handleClick = (e) => {
    setCurrentPosView(e.target.textContent);
    setSearchParams({ position: e.target.textContent });
  };
  const handleOpenSide = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <i
        onClick={handleOpenSide}
        className={`fa-solid fa-angles-right fixed text-3xl mt-5 ml-2 md:hidden z-20 cursor-pointer ${
          isOpen ? "hidden" : ""
        }`}
      ></i>
      <nav
        className={`bg-color-blue rounded-tr-xl rounded-br-xl h-[100dvh] ${
          isOpen ? "w-[45%]" : "w-0 "
        } z-20 fixed md:static  border-r-color-blue md:w-fit  pt-10 transition-all`}
      >
        <ul className={`flex flex-col ${!isOpen ? "hidden md:block" : ""}  `}>
          <i
            className={`fa-solid fa-angles-left text-3xl  mb-5 mr-2 text-white cursor-pointer self-end ${
              !isOpen ? "hidden" : ""
            }`}
            onClick={handleOpenSide}
          ></i>
          {data.map((position) => (
            <li
              key={position.id}
              onClick={handleClick}
              className="text-xl text-white md:hover:bg-color-gray md:hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl"
            >
              {position.title}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
