import React from "react";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

const Head = () => {
  return (
    <div className="bg-white h-20 grid grid-flow-col items-center p-2 px-8 shadow-xl">
      <div className="flex items-center">
        <h5 className="text-2xl">
          <FaBars />
        </h5>
        <h2 className="text-2xl font-sans font-bold ml-2">Video Box</h2>
      </div>
      <div className="flex items-center">
        <input
          className="w-[27rem] h-6 p-5 text-lg rounded-l-full border border-black focus:outline-none"
          type="text"
        />
        <button className="text-xl border border-gray-600 hover:text-white hover:bg-slate-800 p-[10px] rounded-e-full">
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
