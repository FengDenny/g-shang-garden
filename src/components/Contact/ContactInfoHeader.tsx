import React from "react";
import { translate } from "@/components/i18nTranslate/helper";

type Props = {
  tStringH3: string;
  tStringSpan?: string;
  tStringA?: string;
};

const ContactInfoHeader = ({ tStringA, tStringH3, tStringSpan }: Props) => {
  return (
    <div className="pt-2">
      <h3 className="description-text text-primary-dark-100">
        {translate(tStringH3)}:
        {tStringSpan ? (
          <span className="pl-2 text-primary-dark-300">
            {translate(tStringSpan)}
          </span>
        ) : (
          tStringA && (
            <a
              className="delya-75 pl-2 text-primary-dark-300 transition-all duration-75 hover:text-primary-green-100 hover:underline"
              href={`mailto:${tStringA}`}
            >
              {translate(tStringA)}
            </a>
          )
        )}
      </h3>
    </div>
  );
};

export default ContactInfoHeader;
