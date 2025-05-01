import React, { Suspense } from "react";
import Header from "../Components/Header/Header";
import Categori from "../Components/Header/Categories/Categori";
import { Outlet } from "react-router";

function Home() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 ">
        <section className="left-side col-span-3 px-3 ">
          <h2 className="text-xl font-bold my-3">All Caterogy</h2>
          <Suspense fallback={<span>lodding....</span>}>
            <Categori></Categori>
          </Suspense>
        </section>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="right-side col-span-3"></section>
      </main>
    </div>
  );
}

export default Home;
