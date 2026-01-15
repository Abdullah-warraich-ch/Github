import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa";

import { CiLocationArrow1 } from "react-icons/ci";

const Hstyle = "text-white font-bold text-5xl";

function Intro() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Heading FWord="SOFTWARE" LWord="ENGINEER" />
      </div>
      <div className="pr-45">
        <Paragraph para="Passionate about creating intuitive and engaging user experiences.Specialize in transforming ideas into beautifully crafted products." />
      </div>
      <div className="flex w-1/2 gap-20">
        <div className="flex flex-col items-center">
          <h1 className={Hstyle}>1+</h1>
          <Paragraph para="YEARS OF EXPERIENCE" />
        </div>
        <div>
          <h1 className={Hstyle}>3+</h1>
          <Paragraph para="PROJECTS COMPLETED" />
        </div>
        <div>
          <h1 className={Hstyle}>2+</h1>
          <Paragraph para="CLIENTS WORLDWIDE" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="h-61 w-[40%] bg-orange-400 rounded flex flex-col p-8 gap-4 ">
          <div>
            <SiAltiumdesigner size={48} color="white" />
          </div>
          <h1 className="text-white font-medium text-xl">
            Figma, PhotoShop, Canva & After Effect
          </h1>
          <div className="flex justify-end">
            <button
              align="right"
              className="border rounded p-1 border-white text-white justify-end hover:text-orange-400 hover:bg-white transition delay-100"
            >
              <CiLocationArrow1 size={20} />
            </button>
          </div>
        </div>
        <div className="h-61 w-[60%] bg-green-400 rounded flex flex-col p-8 gap-4 ">
          <div>
            <FaCode size={48} color="black" />
          </div>
          <h1 className="text-black font-medium text-xl">
            React, Next, Tailwind, Bootstrap & JQuery
          </h1>
          <div className="flex justify-end">
            <button
              align="right"
              className="border rounded p-1 border-black text-black justify-end hover:text-green-400 hover:bg-black transition delay-100"
            >
              <CiLocationArrow1 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
