import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactLayout";
import { emailJSENV } from "@/data/emailjs";
import { FormValidation } from "@/components/helper/FormValidation";
import { useTranslation } from "react-i18next";
import { translate } from "@/components/i18nTranslate/helper";
type Props = {};

const emailJS = (props: Props) => {
  const [fullName, setFullName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const { public_key, template_id, service_id } = emailJSENV;
  const { i18n } = useTranslation();

  const lang = i18n.language;

  const translateNameError = lang === "en" ? "Full name" : "全名";
  const translateEmailError = lang === "en" ? "Email address" : "电子邮件地址";
  const translateMessageError = lang === "en" ? "Message" : "留言";

  useEffect(() => {
    fullName &&
      FormValidation(
        lang,
        fullName,
        translateNameError,
        "fullName",
        setFullNameError
      );

    email &&
      FormValidation(lang, email, translateEmailError, "email", setEmailError);
    message &&
      FormValidation(
        lang,
        message,
        translateMessageError,
        "message",
        setMessageError
      );
  }, [fullName, email, message, lang]);

  const handleSend = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        `${service_id}`,
        `${template_id}`,
        formRef.current as HTMLFormElement,
        `${public_key}`
      )
      .then(() => {
        setFullName("");
        setMessage("");
        setEmail("");
        setIsLoading(false);
        setError(false);
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setIsLoading(false);
        setMessageSent(false);
      });
  };

  return (
    <ContactForm
      handleSend={handleSend}
      fullName={fullName}
      email={email}
      message={message}
      setFullName={setFullName}
      setMessage={setMessage}
      setEmail={setEmail}
      formRef={formRef}
      isLoading={isLoading}
      error={error}
      messageSent={messageSent}
      fullNameError={fullNameError}
      emailError={emailError}
      messageError={messageError}
    />
  );
};

export default emailJS;
