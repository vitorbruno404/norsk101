"use client";
import React, { useEffect, useState } from "react";
import SimliAgent from "@/app/SimliAgent";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <SimliHeaderLogo />
      <Navbar />

      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          {showDottedFace && <DottedFace />}
          <SimliAgent
            onStart={onStart}
            onClose={onClose}
          />
        </div>
      </div>

      <div className="max-w-[350px] font-thin flex flex-col items-center ">
        <ul className="list-decimal list-inside max-w-[350px] ml-[6px] mt-2">
        </ul>
      </div>
    </div>
  );
};

export default Demo;
