import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Intro from "./Section/Intro";

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
        <div>
          <Intro />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
