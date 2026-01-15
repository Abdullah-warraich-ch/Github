import React from "react";
import { FaGithub } from "react-icons/fa";

import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="bg-white flex flex-col p-10 rounded-2xl items-center gap-8 sticky top-0">
      <div>
        <img
          src="Meda.jpeg"
          alt="Model"
          className="h-71 rounded-2xl shadow shadow-2xl "
        />
      </div>
      <div>
        <h1 className="font-poppins font-bold text-3xl">Abdullah</h1>
      </div>
      {/* SVG */}

      <div className="mt-15">
        <p className="font-medium leading-4 text-center">
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>
      <div className="flex gap-3 text-[#be4027] text-2xl">
        <FaGithub />
        <CiLinkedin />
        <CiFacebook />
        <CiInstagram />
      </div>
    </div>
  );
}

export default Sidebar;
