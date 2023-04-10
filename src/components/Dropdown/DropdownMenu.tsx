import React, { useState } from "react";
import Dropdown from "./index";

import EnToCn from "@/assets/en-to-cn.svg";
type Props = {};

const DropdownMenu = (props: Props): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [, setSelectLang] = useState<string>("");

  const language = () => {
    return ["English (US)", "中文 (简体)"];
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const langSelection = (language: string): void => {
    setSelectLang(language);
  };

  return (
    <button
      className="relative"
      onClick={(): void => {
        toggleDropDown();
      }}
      onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
        dismissHandler(e)
      }
    >
      <div
        className="relative bottom-3
       w-auto rounded-sm p-1 text-base text-color-white
      "
      >
        <img
          src={EnToCn}
          alt="English to Chinese"
          className="mx-auto h-10 w-10 hover:rounded-md hover:bg-primary-green-100 hover:transition-colors
          hover:delay-100 hover:duration-100
          "
        />
      </div>
      {showDropDown && (
        <Dropdown
          lang={language()}
          showDropdown={false}
          langSelection={langSelection}
        />
      )}
    </button>
  );
};

export default DropdownMenu;
