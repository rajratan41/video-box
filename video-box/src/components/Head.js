import React from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className="bg-white h-20 grid grid-flow-col items-center p-2 px-8 shadow-xl">
      <div className="flex items-center">
        <h5
          onClick={() => toogleMenuHandler()}
          className="text-2xl cursor-pointer"
        >
          <FaBars />
        </h5>

        <a href="/">
          <h2 className="text-2xl font-sans font-bold ml-6 cursor-pointer">
            Video Box
          </h2>
        </a>
      </div>
      <div className="flex items-center">
        <input
          className="w-20 md:w-[27rem] h-6 p-5 text-lg rounded-l-full border border-black focus:outline-none"
          type="text"
        />
        <button className="text-xl border border-gray-600 bg-gray hover:text-white hover:bg-slate-500 p-[10px] rounded-e-full">
          <FaSearch />
        </button>
      </div>
      <div className="flex items-center justify-end">
        <h4 className="text-2xl">
          <FaUser />
        </h4>
      </div>
    </div>
  );
};

export default Head;
