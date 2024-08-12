import React from "react";
import AppHeader from "../BasicFolder/Header";

import Footer from "../BasicFolder/Footer";
import Banner from "../BasicFolder/Banner";
import ContactUsMap from "./ContactUsMap";
import contactUS from "../Assets/contactusbanner.jpeg";
import ContactUsForm from "./contactUsForm";

const ContactUs = () => {
  return (
    <div className="home-container">
      <AppHeader className="headers" />
      <div>
        <Banner
          title="Get in Touch for Expert Laptop and Desktop Repairs"
          subTitle="Conveniently Located in Rajajinagar, Ready to Help."
          Logo={contactUS}
        />
      </div>
      <div>
        <ContactUsMap />
      </div>
      <div>
        <ContactUsForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
