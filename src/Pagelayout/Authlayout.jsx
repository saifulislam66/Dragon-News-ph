import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";

function Authlayout() {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
}

export default Authlayout;
