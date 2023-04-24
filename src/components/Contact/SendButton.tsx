import { FaSpinner } from "react-icons/fa";
import { translate } from "../i18nTranslate/helper";
type Props = {
  enabled: boolean;
  isLoading: boolean;
  messageSent: boolean;
  fullName: string;
  message: string;
  email: string;
  handleSend: (e: any) => void;
};

const SendButton = ({
  enabled,
  messageSent,
  isLoading,
  fullName,
  message,
  email,
  handleSend,
}: Props) => {
  return (
    <div className="mx-auto mt-3 sm:mx-0">
      {isLoading ? (
        <FaSpinner className="text-primary-pink animate-spin text-2xl" />
      ) : (
        <button
          className="h-8 w-full 
    cursor-pointer rounded-md border border-solid 
    border-color-white text-color-white shadow-2xl"
          onClick={(e) => handleSend(e)}
          disabled={!enabled || !fullName || !email || !message || messageSent}
        >
          {messageSent
            ? translate("contact.messageSent")
            : translate("contact.sendMessage")}
        </button>
      )}
    </div>
  );
};

export default SendButton;
