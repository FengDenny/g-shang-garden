import React from "react";
import { translate } from "@/components/i18nTranslate/helper";
import ContactInfoHeader from "./ContactInfoHeader";
type Props = {};

const ContactInfo = (props: Props) => {
  return (
    <div className="sm:mx-auto ">
      <ContactInfoHeader
        tStringH3="contact.contactInfo.title"
        tStringSpan="contact.contactInfo.description"
      />
      <ContactInfoHeader
        tStringH3="contact.personal.numberTitle"
        tStringSpan="contact.personal.numberDescription"
      />
      <ContactInfoHeader
        tStringH3="contact.personal.emailTitle"
        tStringA="contact.personal.emailDescription"
      />
      <ContactInfoHeader
        tStringH3="contact.work.workTitle"
        tStringSpan="contact.work.workDescription"
      />
      <ContactInfoHeader
        tStringH3="contact.work.emailTitle"
        tStringA="contact.work.emailDescription"
      />
    </div>
  );
};

export default ContactInfo;
