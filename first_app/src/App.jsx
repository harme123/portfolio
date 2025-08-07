import React from "react";
import IntroSection from "./components/IntroSection";
import Separator from "./components/Separator";
import AboutMeSection from "./components/AboutMeSection";
import EducationAndWorkSection from "./components/EducationAndWorkSection";
import ServiceSection from "./components/ServiceSection";
import ContactInfoSection from "./components/ContactInfoSection";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <IntroSection />
      <Separator />
      <AboutMeSection />
      <Separator />
      <ServiceSection/>
      <Separator />
      <EducationAndWorkSection />
      <Separator />
      <ContactInfoSection />


    </div>
  );
}

export default App;


