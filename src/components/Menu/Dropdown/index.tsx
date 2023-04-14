import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
type Props = {
  lang: string[];
  showDropdown: Boolean;
  langSelection: Function;
};

const index = ({ lang, langSelection }: Props): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdown =
    "absolute sm:right-2  bg-color-white-100 p-2 rounded-lg w-44 drop-shadow-2xl animate-appear";

  const { i18n } = useTranslation();

  const toggleLangHandler = (language: string): void => {
    langSelection(language);
    language === "中文 (简体)"
      ? i18n.changeLanguage("cn")
      : i18n.changeLanguage("en");
  };

  useEffect(() => {
    setShowDropdown(showDropdown);
  }, [showDropdown]);

  return (
    <div className={!showDropdown ? dropdown : ""}>
      {lang.map((language: string, index: number): JSX.Element => {
        return (
          <p
            key={index}
            onClick={(): void => {
              toggleLangHandler(language);
            }}
            className="py-2 text-base text-primary-green-100 hover:text-primary-yellow-100 hover:transition-colors   
            hover:delay-75 hover:duration-75 active:text-primary-yellow-300"
          >
            {language}
          </p>
        );
      })}
    </div>
  );
};

export default index;
