import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

function Experience() {
  return (
    <div>
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10">
        <ExperienceCard
          heading="React JS Intern"
          para="Currently working as a Frontend Intern at a software house, contributing to the development of responsive user interfaces using HTML, CSS, JavaScript, and React."
          date="Dec 22, 2025 – Present"
        />
        <ExperienceCard
          heading="IT Intern"
          para="Worked as an IT Intern at StormFiber, assisting with daily IT operations including system setup, basic network support, and troubleshooting hardware and software issues."
          date="June 15, 2025 – Dec 21, 2025"
        />
      </div>
    </div>
  );
}

export default Experience;
