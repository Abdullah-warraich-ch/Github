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
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center pt-10 pb-10">
        <Navbar />
      </div>
      <div className="flex w-[80%] gap-10">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-20">
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
