import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaRegCircleUser } from "react-icons/fa6";

import userimg from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

function Navbar() {
  const { user, singOutUser } = use(AuthContext);

  const handleSingOut = () => {
    singOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex py-4 justify-between  mx-auto gap-4">
      <div></div>
      <div className="flex ml-30 justify-end gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <FaRegCircleUser size={30} />

        {user ? (
          <button onClick={handleSingOut} className="btn btn-info">
            Sign Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-gray-200 px-3 py-2 rounded-sm text-black "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
