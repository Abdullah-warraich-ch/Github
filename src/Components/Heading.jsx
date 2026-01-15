import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-white font-extrabold text-[94px] font-inter leading-25 m-0 p-0">
      {FWord} <span className="text-secondary">{LWord}</span>
    </h1>
  );
}

export default Heading;
