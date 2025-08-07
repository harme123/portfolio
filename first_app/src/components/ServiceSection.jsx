import React from "react";
import { HoverEffect } from "./ui/HoverEffect";  // adjust path as needed
import { Button } from "./MovingBorder";


    const services = [
  {
    title: "Web Development",
    description: "Building responsive, modern websites that look great on any device. I focus on clean code, fast performance, and SEO best practices to help your business grow online.",
    link: "#web-development",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user experiences that delight your users. I create wireframes, prototypes, and polished designs that are both functional and visually appealing.",
    link: "#ui-ux-design",
  },
  {
    title: "Mobile Apps",
    description: "Creating cross-platform mobile applications that provide seamless user experiences. Whether it’s iOS or Android, I build apps optimized for performance and usability.",
    link: "#mobile-apps",
  },
];

function ServiceSection() {
  return (
    <div className="max-w-6xl mx-auto w-full px-12 py-12 ">
      <h2 className="text-5xl font-bold text-gray-800 mb-2">Services</h2>
      <hr className="border-t-4 mb-5 mt-6" />
      <p className="text-gray-600 max-w-xl text-2xl mb-6">Services I provide:</p>

      <div className="flex justify-end mb-6">
        <Button
          containerClassName="mt-0"
          borderClassName="bg-[radial-gradient(circle,_#9B177E_40%,_transparent_60%)]"
          duration={4000}
          className="text-white font-semibold"
        >
          More Services
        </Button>
      </div>

      {/* Use the HoverEffect component here */}
      <HoverEffect
        items={services}
        className="max-w-7xl mx-auto px-23 py-17 -ml-27 -mt-7 -mb-9"
      />
    </div>
  );
}

export default ServiceSection;
