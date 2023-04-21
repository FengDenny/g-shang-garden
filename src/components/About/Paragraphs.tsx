import React from "react";
import { translate } from "@/components/i18nTranslate/helper";

type Props = { tString: string };

const Paragraphs = ({ tString }: Props) => {
  return (
    <p className="mx-auto w-[70%] pt-4 text-lg font-semibold text-primary-dark-300">
      {translate(tString)}
    </p>
  );
};

export default Paragraphs;
