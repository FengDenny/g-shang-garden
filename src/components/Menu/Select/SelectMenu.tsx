import React, { useState } from "react";
import Select from "../Select/index";
import { useTranslation } from "react-i18next";

type Props = {
  styling?: string;
};

const SelectMenu = ({ styling }: Props): JSX.Element => {
  const { i18n } = useTranslation();
  const [langType] = useState<string[]>(["中文 (简体)", "English (US)"]);

  const type = langType.map((lang) => lang);

  const selectLanguage = (e: any) => {
    const value = e.target.selectedOptions[0].text;
    Object.is(value, "中文 (简体)")
      ? i18n.changeLanguage("cn")
      : i18n.changeLanguage("en");
  };

  return (
    <Select lang={type} selectLanguage={selectLanguage} styling={styling} />
  );
};

export default SelectMenu;
