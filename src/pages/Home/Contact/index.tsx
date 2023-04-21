import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactLayout";
import { emailJSENV } from "@/data/emailjs";
import { formValidation } from "@/components/helper/FormValidation";

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

  useEffect(() => {
    fullName &&
      formValidation(fullName, "Full name", "fullName", setFullNameError);

    email && formValidation(email, "Email", "email", setEmailError);
    message && formValidation(message, "Message", "message", setMessageError);
  }, [fullName, email, message]);

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
