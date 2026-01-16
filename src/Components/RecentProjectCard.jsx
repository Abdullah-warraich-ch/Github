import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function RecentProjectCard({ pic, heading, discr }) {
  return (
    <div className="flex p-5 hover:bg-secondary rounded-xl gap-3 items-center group">
      <div className=" shrink-0">
        <img
          src={pic}
          alt=""
          srcSet=""
          className="h-32 w-40 object-cover rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-white font-medium text-xl">{heading}</h1>
        <p className="text-gray-500">{discr}</p>
      </div>
      <div className="ml-auto transition delay-75 group-hover:translate-x-2 hidden lg:block">
        <IoIosArrowForward color="orange" />
      </div>
    </div>
  );
}

export default RecentProjectCard;
