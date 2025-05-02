import React, { use } from "react";
import { NavLink } from "react-router";
const cat = fetch("/categories.json").then((res) => res.json());
function Categori() {
  const categories = use(cat);

  return (
    <div className="flex flex-col gap-5 h-screen overflow-scroll sticky top-3  ">
      <h2 className="text-xl font-bold my-3">All Caterogy</h2>
      {categories.map((cat) => (
        <NavLink
          key={cat.id}
          to={`/cat/${cat.id}`}
          className="text-left rounded-sm  px-2 py-2 text-lg cursor-pointer border "
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Categori;
