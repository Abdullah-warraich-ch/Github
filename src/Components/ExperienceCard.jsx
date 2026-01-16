import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function ExperienceCard({ heading, para, date }) {
  return (
    <div className="flex items-center gap-60 p-5 rounded group hover:bg-secondary">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-white text-2xl">{heading}</h1>
        <p className="text-gray-500">{para}</p>
        <p className="text-gray-500">{date}</p>
      </div>
      <div className="transition delay-75 group-hover:translate-x-2 hidden lg:block">
        <IoIosArrowForward color="orange" />
      </div>
    </div>
  );
}

export default ExperienceCard;
