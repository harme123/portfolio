import React from "react";
import CVPopup from "./CVPopup";

function AboutMeSection() {
  return (
    <div className="max-w-6xl mx-auto w-full px-0 py-12">
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Image on the left */}
        <img
          src="https://www.shutterstock.com/image-vector/software-developer-woman-long-wavy-260nw-2349884873.jpg"
          alt="Harme"
          className="w-[400px] h-[360px] object-cover rounded-2xl -ml-20"
        />

        {/* Text on the right */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 -mt-3">About Me</h1>
          <hr className="border-t-5 bg-black mb-5 mt-3" />

          <p className="text-gray-600 text-base mb-6 max-w-xl -mt-3">
            I am a passionate software engineer based in Sulaimanyah. I specialize in crafting
            visually appealing and highly functional web applications using modern tools and frameworks.
            With a focus on clean code and intuitive design, I strive to deliver solutions that exceed
            expectations. I'm always eager to learn and stay up-to-date with the latest technologies.
            Collaboration and problem-solving are at the heart of my development process.
            Whether working solo or in a team, I bring dedication, creativity, and precision to every project.
          </p>

          {/* Use the CVPopup button here */}
          <CVPopup />
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
