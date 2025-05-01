import React from "react";
import logo from "../../assets/logo.png";

import { format } from "date-fns";
import Navbar from "./Navbar";
import Markquee from "../Markquee";
function Header() {
  return (
    <div>
      <div className="flex  mx-auto items-center justify-center flex-col gap-3 ">
        <img className="w-[330px]" src={logo} alt="" />
        <p className="text-gray-300 ">Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE, do MMMM yyyy")}</p>
        <Markquee></Markquee>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
