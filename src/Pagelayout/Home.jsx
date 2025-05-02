import React, { Suspense } from "react";
import Header from "../Components/Header/Header";
import Categori from "../Components/Header/Categories/Categori";
import { Outlet } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import RightSidebar from "../Components/RiteSidebar/RightSidebar";

function Home() {
  return (
    <div className="w-11/12 py-5 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 h-screen ">
        <section className="left-side col-span-3  px-3  ">
          <Suspense fallback={<span>lodding....</span>}>
            <Categori></Categori>
          </Suspense>
        </section>
        <section className="main col-span-6 px-3 mx-auto">
          <Outlet></Outlet>
        </section>
        <section className="right-side px-3  col-span-3 sticky to-0">
          <RightSidebar></RightSidebar>
        </section>
      </main>
    </div>
  );
}

export default Home;
