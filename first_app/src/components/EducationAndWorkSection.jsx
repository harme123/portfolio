import React from "react";

const educationAndWorkItems = [
  {
    title: "Education",
    description: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-1 h-20 bg-[#9B177E] rounded"></div>
          <div>
            <h3 className="font-bold mt-3">BSc in Software Engineering</h3>
            <p className="text-sm mt-3">American University - 2021–2025</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-1 h-20 bg-[#9B177E] rounded"></div>
          <div>
            <h3 className="font-bold mt-3">High School Diploma</h3>
            <p className="text-sm mt-3">Shirin School - 2018–2021</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Work Experience",
    description: (
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-1 h-20 bg-[#C5B0CD] rounded"></div>
          <div>
            <h3 className="font-bold mt-3">Frontend Developer Intern</h3>
            <p className="text-sm mt-3">XYZ Tech – Summer 2024</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-1 h-20 bg-[#C5B0CD] rounded"></div>
          <div>
            <h3 className="font-bold mt-3">Freelance UI/UX Designer</h3>
            <p className="text-sm mt-3">Upwork/Fiverr – 2023–Present</p>
          </div>
        </div>
      </div>
    ),
  },
];

function EducationAndWorkSection() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Education and Work</h1>
        <p className="text-lg text-gray-600 mt-4">"My academic and professional journey"</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationAndWorkItems.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-gray-200 p-6 shadow-md cursor-pointer transition-transform transition-colors duration-300
              hover:bg-black hover:text-white hover:-translate-y-2"
          >
            <h2 className="text-2xl font-semibold mb-6">{title}</h2>
            <div>{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationAndWorkSection;
