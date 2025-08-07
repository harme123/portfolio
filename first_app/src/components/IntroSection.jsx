// src/components/HeroSection.jsx
import React from "react";
import { ColourfulText } from "./ColorfulText";
import { Button } from "./MovingBorder";

export default function IntroSection() {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left text section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6 mt-9 -ml-9">
            <ColourfulText text="Hello," />
            <br />
            my name is Harme, a software engineer based in Sulaimanyah.
          </h1>

          <p className="text-black text-lg max-w-lg mb-6 -ml-9">
            I specialize in building exceptional websites and applications.
          </p>

          <Button
            containerClassName="mt-4 -ml-10"
            borderClassName="bg-[radial-gradient(circle,_#ff6ec4_40%,_transparent_60%)]"
            duration={4000}
          >
            View My Work
          </Button>
        </div>

        {/* Right image section */}
       <div className="flex flex-col items-center w-150 h-100">
  <img
    src="https://static.vecteezy.com/system/resources/previews/009/508/336/non_2x/software-engineer-at-work-2d-isolated-illustration-coding-flat-character-on-cartoon-background-remote-work-colourful-editable-scene-for-mobile-website-presentation-vector.jpg"
    alt="Software Engineer Illustration"
    className="rounded-2xl w-150 object-cover bg-[#f5f5dc] -mr-40"
  />
      </div>
    </div>
    </div>
  );
}

