import React from "react";
import HeaderAllPage from "../Components/HeaderAllPage";
import { ContactSec1, ContactSec2 } from "../Components/ContactSection";

const Contact = () => {
  return (
    <div className=" overflow-hidden">
      <HeaderAllPage> Contact </HeaderAllPage>

      <div className="py-8">
        <ContactSec1 />
      </div>

      <div className="py-8">
        <ContactSec2 />
      </div>

      <div>
        <iFrame
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7453.61012802641!2d72.920175!3d20.920161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f76d7a7bd155%3A0xe715e4218027ad!2sShree%20Swaminarayan%20International%20School!5e0!3m2!1sen!2sin!4v1692271972941!5m2!1sen!2sin"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iFrame>
      </div>
    </div>
  );
};

export default Contact;
