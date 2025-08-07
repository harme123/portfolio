import React from "react";
import { Button } from "./MovingBorder"; // Adjust the path to your Button component
export default function ContactInfoSection() {
  return (
    <div className="mt-3 w-full px-6 py-12 bg-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-14 text-center">Contact Me</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Left Side - Contact Info */}
        <div className="flex-1 flex flex-col justify-center gap-6 text-gray-700 -mt-17">
          <div className="flex items-center gap-4">
            <div className="bg-[#9B177E] text-white p-3 rounded-full mb-5">
              <i className="fas fa-phone"></i>
            </div>
            <span className="text-2xl mb-6">+964 772 552 2003</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#C5B0CD] text-white p-3 rounded-full mb-7">
              <i className="fas fa-envelope"></i>
            </div>
            <span className="text-2xl mb-7">hr21206@auis.edu.krd</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#5459AC] text-white p-3 rounded-full">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <span className="text-2xl">Sulaymaniyah, Iraq</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-1 rounded-3xl mr-14 mx-8 bg-[#9B177E]"></div>

        {/* Right Side - Contact Form */}
        <form className="flex-1 w-full space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Replace regular button with your animated Button component */}
          <Button
            type="submit"
            containerClassName="mt-4"
            borderClassName="bg-[radial-gradient(circle,_#9B177E_40%,_transparent_60%)]"
            duration={4000}
            className="w-full text-white font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
