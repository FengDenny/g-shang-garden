import React from "react";
import { translate } from "@/components/i18nTranslate/helper";
import AnimateInView from "../helper/AnimateInView";

type Props = {
  translateHeader: string;
  translateTitle: string;
  animateHeader?: String;
  animateTitle?: String;
};

const index = ({
  translateHeader,
  translateTitle,
  animateHeader,
  animateTitle,
}: Props) => {
  return (
    <>
      <AnimateInView styling={`${animateTitle}`}>
        <h6 className="text-bold text-lg text-primary-green-300 underline decoration-primary-dark-300 underline-offset-4">
          {translate(translateTitle)}
        </h6>
      </AnimateInView>

      <AnimateInView styling={`${animateHeader}`}>
        <h2 className=" pt-2 text-2xl font-extrabold text-primary-dark-300">
          {translate(translateHeader)}
        </h2>
      </AnimateInView>
    </>
  );
};

export default index;
