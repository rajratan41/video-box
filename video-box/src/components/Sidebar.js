import React from "react";
import { FaHome, FaVideo, FaHistory } from "react-icons/fa";
import { MdVideoLibrary, MdLibraryBooks } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const Sidebar = () => {
  return (
    <>
      <div className="py-5 px-8 shadow-lg w-52 ">
        <ul>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer">
            <FaHome />
            Home
          </li>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer">
            <FaVideo />
            Shorts
          </li>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer ">
            <MdVideoLibrary />
            Subscriptions
          </li>
        </ul>

        <ul>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer">
            <MdLibraryBooks />
            Library
          </li>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer">
            <FaHistory />
            History
          </li>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer ">
            <MdVideoLibrary />
            Watch Later
          </li>
          <li className="flex items-center gap-3 font-medium hover:bg-slate-500 hover:text-white rounded-lg p-2 mt-2 cursor-pointer ">
            <AiFillLike />
            Liked Video
          </li>
        </ul>

        <ul className="py-5 px-2">
          <h1 className="font-bold">Subscriptions</h1>
          <li className="mt-3 font-medium">Music</li>
          <li className="mt-3 font-medium">Sports</li>
          <li className="mt-3 font-medium">Gaming</li>
          <li className="mt-3 font-medium">News</li>
          <li className="mt-3 font-medium">Learning</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
