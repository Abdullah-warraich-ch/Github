import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Intro from "./Section/Intro";
import RecentProjects from "./Section/RecentProjects";
import Experience from "./Section/Experience";
import Skills from "./Section/Skills";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";

function App() {
  return (
    <div className="flex flex-col lg:items-center">
      <div className=" lg:w-full flex justify-center pt-10 pb-10 max-w-">
        <Navbar />
      </div>
      <div className="flex flex-col sm:max-w-4/5 xl:flex-row 2xl:max-w-1/2 lg:max-w-full xl:max-w-[80%] gap-10 ">
        <div className="max-w-[90%] m-auto lg:m-0">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-20 max-w-[90%] m-auto ">
          <Intro />
          <RecentProjects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
