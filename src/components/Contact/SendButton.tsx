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
    <div className="mt-3 w-11/12 sm:w-full">
      {isLoading ? (
        <FaSpinner className="animate-spin text-2xl text-primary-yellow-300" />
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
