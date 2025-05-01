import React from "react";
import { NavLink } from "react-router";
import { FaRegCircleUser } from "react-icons/fa6";

import userimg from "../../assets/user.png";

function Navbar() {
  return (
    <div className="flex w-11/12 justify-between  mx-auto gap-4">
      <div></div>
      <div className="flex justify-end gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">News</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <FaRegCircleUser size={30} />
        <button className="bg-gray-200 px-3 py-2 rounded-sm text-black ">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
