import React from "react";
import { GoHome, GoFileSubmodule } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { GrTechnology } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

function Navbar() {
  return (
    <div className="text-xl text-white gap-8 bg-secondary flex items-center m-8 pl-5 pr-5 pt-3 pb-3 rounded-2xl w-auto">
      <GoHome />
      <GoFileSubmodule />
      <CgWorkAlt />
      <GrTechnology />
      <LuNotebookPen />
    </div>
  );
}

export default Navbar;
