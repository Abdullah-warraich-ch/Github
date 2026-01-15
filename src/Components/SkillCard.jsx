import React from "react";

function SkillCard({ logo, title, disc }) {
  return (
    <div className="flex p-2 items-center gap-5 hover:bg-secondary rounded-2xl">
      <div className="text-black bg-white h-20 w-20 text-5xl flex justify-center items-center rounded-2xl">
        {logo}
      </div>
      <div>
        <h1 className="text-white text-2xl">{title}</h1>
        <p className="text-gray-500">{disc}</p>
      </div>
    </div>
  );
}

export default SkillCard;
