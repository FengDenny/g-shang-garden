import { Ref } from "react";
import { LabelWithInput, SendButton } from "@/components/Contact";
import { translate } from "@/components/i18nTranslate/helper";

type Props = {
  isLoading: boolean;
  error: boolean;
  messageSent: boolean;
  fullName: string;
  message: string;
  email: string;
  fullNameError: string;
  emailError: string;
  messageError: string;
  handleSend: (e: any) => void;
  setFullName: (value: string) => void;
  setMessage: (value: string) => void;
  setEmail: (value: string) => void;
  formRef: Ref<HTMLFormElement>;
};

const ContactLayout = ({
  handleSend,
  fullName,
  message,
  email,
  isLoading,
  messageSent,
  setFullName,
  setMessage,
  setEmail,
  formRef,
  fullNameError,
  emailError,
  messageError,
}: Props) => {
  const enabled =
    fullNameError.length === 0 &&
    messageError.length === 0 &&
    emailError.length === 0;
  return (
    <section id="contact">
      <div
        className="text-primary-100 mx-auto mt-40 flex  w-4/6  flex-col transition-colors       
       delay-100 duration-100 ease-in-out dark:text-color-white"
      >
        <h2 className="mx-auto text-2xl  font-bold sm:text-3xl ">
          {translate("contact.header")}
        </h2>
        <span className="border-b-color-description mx-auto mt-1 w-44 border-b border-solid"></span>
        <p
          className="description-text relative left-6  
        mx-auto mt-4 w-64 text-xl 
        font-normal text-primary-dark-100 
        sm:w-96"
        >
          {translate("contact.description")}
        </p>
      </div>
      <div
        className="mx-auto mt-2 flex h-auto  w-5/6 flex-col  flex-wrap justify-between py-24 text-primary-dark-300 transition-colors
             delay-100 duration-100 ease-in-out sm:flex-row"
      >
        <div className="mx-auto">
          <form
            ref={formRef}
            className="delay-70 animate-fadeIn  relative mx-auto  
          mt-10 flex h-auto w-80 flex-col rounded-lg 
          bg-primary-green-300 p-10   
          shadow-lg  transition-colors
          duration-75 ease-in-out sm:-top-6 sm:left-5
          sm:w-full
          "
          >
            <LabelWithInput
              id="fullName"
              htmlFor="Full Name"
              labelName={translate("contact.fullName")}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              error={fullNameError}
            />
            <LabelWithInput
              id="email"
              htmlFor="Email Address"
              labelName={translate("contact.email")}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <LabelWithInput
              id="message"
              htmlFor="Message"
              type="message"
              labelName={translate("contact.message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
            />
            <SendButton
              enabled={enabled}
              messageSent={messageSent}
              isLoading={isLoading}
              fullName={fullName}
              message={message}
              email={email}
              handleSend={handleSend}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;
