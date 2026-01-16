import React from "react";
import { FaGithub } from "react-icons/fa";

import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";

function Sidebar() {
  return (
    <div className="bg-white flex flex-col p-5 lg:p-10 rounded-2xl items-center gap-8 lg:sticky top-20">
      <div>
        <img
          src="Media.jpeg"
          alt="Model"
          className="h-71 rounded-2xl shadow shadow-2xl shrink-0 "
        />
      </div>
      <div>
        <h1 className="font-poppins font-bold text-3xl">Abdullah</h1>
      </div>
      {/* SVG */}

      <div className="lg:mt-15">
        <p className="font-medium leading-7 text-gray-500 text-center text-xl">
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
