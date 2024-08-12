import React from "react";
import Footer from "../BasicFolder/Footer";
import AppHeader from "../BasicFolder/Header";
import Banner from "../BasicFolder/Banner.jsx";
import AboutUsContent from "./AboutUsContent";
import AboutUS from "../Assets/aboutus.jpeg";

const AboutUsPage = () => {
  return (
    <div className="home-container">
      <AppHeader className="headers" />
      <div>
        <Banner
          title="Your Trusted Partner in Laptop and Desktop Sales"
          subTitle=" Years of Experience, Committed to Excellence in Every Service."
          Logo={AboutUS}
        />
      </div>
      <div>
        <AboutUsContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
