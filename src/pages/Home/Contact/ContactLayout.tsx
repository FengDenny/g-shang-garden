import { Ref } from "react";
import { FaSpinner } from "react-icons/fa";

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
        <h2 className="mx-auto text-2xl  font-bold sm:text-3xl ">Contact</h2>
        <span className="border-b-color-description mx-auto mt-1 w-44 border-b border-solid"></span>
        <p
          className="description-text relative left-6  
        mx-auto mt-4 w-64 text-xl 
        font-normal text-primary-dark-100 
        sm:w-96"
        >
          Send us an email, for business inquries or need a free service
          valuation.
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
            <div className="flex w-72 flex-col">
              <label
                htmlFor="fullName"
                className="description-text  dark:text-color-description px-1 text-xl font-normal text-color-white dark:font-bold"
              >
                Full name
                <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover h-9  w-60 rounded-sm  
              border-b border-solid px-1 text-lg font-normal
            valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72 "
                required
                pattern="[a-zA-Z ]+"
              />
              {fullNameError && (
                <span className="mt-1 text-sm text-rose-500">
                  {fullNameError}
                </span>
              )}
            </div>
            <div className="mt-3 flex w-72 flex-col">
              <label
                htmlFor="fullName"
                className="description-text  dark:text-color-description px-1 text-xl font-normal text-color-white dark:font-bold"
              >
                Email Address
                <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover  h-9 w-60  
              rounded-sm border-b border-solid px-1  text-lg font-normal
            valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72"
                required
              />
              {emailError && (
                <span className="mt-1 text-sm text-rose-500">{emailError}</span>
              )}
            </div>
            <div className="mt-3 flex  w-72 flex-col">
              <label
                htmlFor="fullName"
                className="description-text  dark:text-color-description px-1 text-xl font-normal text-color-white dark:font-bold"
              >
                Message{" "}
                <span className="relative right-1 text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="description-text border-b-primary-300 text-primary-300 caret-primary-pink-hover  h-9 w-60  
              rounded-sm border-b border-solid px-1 text-lg 
              font-normal valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500 sm:w-72"
                required
              />
              {messageError && (
                <span className="mt-1 text-sm text-rose-500">
                  {messageError}
                </span>
              )}
            </div>
            <div className="mx-auto mt-3 sm:mx-0">
              {isLoading ? (
                <FaSpinner className="text-primary-pink animate-spin text-2xl" />
              ) : (
                <button
                  className="border-primary-pink bg-primary-pink text-color-description 
                h-8 w-32 rounded-md border 
                border-solid shadow-2xl"
                  onClick={(e) => handleSend(e)}
                  disabled={
                    !enabled || !fullName || !email || !message || messageSent
                  }
                >
                  {messageSent ? "Message Sent" : "Send"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;
