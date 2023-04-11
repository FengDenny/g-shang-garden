import React from "react";
import { translate, translateObjArr } from "@/components/i18nTranslate/helper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import Header from "@/components/SectionHeader";

type Props = {};

const index = (props: Props) => {
  const design = translateObjArr("offer.design");
  const experience = translateObjArr("offer.experience");

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
          <div className="relative mt-10">
            <h2 className="text-xl font-bold text-primary-dark-300 underline decoration-primary-green-300 underline-offset-8 below397:text-base ">
              {translate("offer.designHeader")}
            </h2>
            <div className="mt-8 grid grid-cols-2-320 gap-10 below768:grid-cols-1">
              {design.map((items: any) => {
                const { id, title } = items;

                return (
                  <div className="flex flex-row" key={id}>
                    <span className="text-2xl text-primary-green-300">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <h5 className="font-semibold text-primary-dark-100">
                      {title}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative mt-10">
            <h2 className="text-xl font-bold text-primary-dark-300 underline decoration-primary-green-300 underline-offset-8 below397:text-base">
              {translate("offer.experienceHeader")}
            </h2>
            <div className="mt-8 grid grid-cols-2-320 gap-10 below768:grid-cols-1">
              {experience.map((items: any) => {
                const { id, title } = items;

                return (
                  <div className="flex flex-row" key={id}>
                    <span className="text-2xl text-primary-green-300">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <h5 className="font-semibold text-primary-dark-100">
                      {title}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
