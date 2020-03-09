import React from "react";

import HeadSection from "../Layout/HeadSection";
import ContactForm from "../Components/ContactForm";
import Background from "../Layout/assets/img/contact-bg.jpg";

const ContactUs = () => {
  return (
    <>
      <HeadSection heading='Contact Us' subheading='We will gladly help you' background={Background} />
      <ContactForm />
    </>
  );
};
export default ContactUs;
