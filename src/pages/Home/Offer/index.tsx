import React from "react";
import { translate, translateObjArr } from "@/components/i18nTranslate/helper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import Header from "@/components/SectionHeader";
import Offer from "@/components/Offer";

type Props = {};

const index = (props: Props) => {
  const design: Array<any> = translateObjArr("offer.design");
  const experience: Array<any> = translateObjArr("offer.experience");

  return (
    <section className=" mt-30 mx-auto flex  w-3/6 p-10 xs:w-full ">
      <div className="mx-auto w-11/12 xs:w-full">
        <div className="text-center">
          <Header
            translateHeader={"offer.header"}
            translateTitle={"offer.title"}
            animateHeader={"animate-moveInRight"}
            animateTitle={"animate-moveInLeft"}
          />
        </div>
        <div className="">
          <Offer design={design} headerTranslate={"offer.designHeader"} />
          <Offer
            design={experience}
            headerTranslate={"offer.experienceHeader"}
          />
        </div>
      </div>
    </section>
  );
};

export default index;
