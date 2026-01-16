import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-white text-center lg:text-left font-extrabold text-[54px] md:text-[94px] font-inter leading-15 lg:leading-25 m-0 p-0">
      {FWord} <span className="text-gray-500 sm:text-secondary">{LWord}</span>
    </h1>
  );
}

export default Heading;
