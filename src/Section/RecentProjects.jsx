import React from "react";
import Heading from "../Components/Heading";
import Paragraph from "../Components/Paragraph";
import { IoIosArrowForward } from "react-icons/io";

function RecentProjects() {
  return (
    <div>
      <div className="mb-10">
        <Heading FWord="RECENT" LWord="PROJECTS" />
      </div>
      <div className="flex p-5 hover:bg-secondary rounded-xl gap-3 items-center group">
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/2646172/file/original-4dfec15f2df0816cc270d85c1f340288.jpg?resize=400x0"
            alt=""
            srcset=""
            className="h-30 w-25 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-white font-medium text-xl">Tutor Booking</h1>
          <p className="text-gray-500">Book Tutor Online</p>
        </div>
        <div className="ml-auto transition delay-75 group-hover:translate-x-2">
          <IoIosArrowForward color="orange" />
        </div>
      </div>
      <div className="flex p-5 hover:bg-secondary rounded-xl gap-3 items-center group">
        <div>
          <img
            src="https://cdn.sanity.io/images/599r6htc/regionalized/1f5848c2e38f2b9c8a5563e4f672c60e8ae97b57-2400x2400.png?w=2400&h=2400&q=75&fit=max&auto=format"
            alt=""
            srcset=""
            className="h-30 w-25 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-white font-medium text-xl">
            Task Management Dashboard
          </h1>
          <p className="text-gray-500">
            Made A Task Management Dashboard for Practice
          </p>
        </div>
        <div className="ml-auto transition delay-75 group-hover:translate-x-2">
          <IoIosArrowForward color="orange" />
        </div>
      </div>

      <div className="flex p-5 hover:bg-secondary rounded-xl gap-3 items-center group">
        <div>
          <img
            src="https://i.pinimg.com/736x/6f/46/55/6f465503a2a317f965dbdbe3f72f1a77.jpg"
            alt=""
            srcset=""
            className="h-30 w-25 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-white font-medium text-xl">
            Admin Style Ui Section
          </h1>
          <p className="text-gray-500">
            Worked on Different Ui Section of Company's Landing Page
          </p>
        </div>
        <div className="ml-auto transition delay-75 group-hover:translate-x-2">
          <IoIosArrowForward color="orange" />
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
