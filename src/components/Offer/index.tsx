import React from "react";
import { translate } from "@/components/i18nTranslate/helper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import AnimateInView from "../helper/AnimateInView";
type Props = {
  design: {
    id: number;
    title: string;
  }[];
  headerTranslate: string;
};

const index = ({ design, headerTranslate }: Props) => {
  return (
    <div className="relative mt-10">
      <AnimateInView
        styling={`${
          headerTranslate.match("offer.designHeader")
            ? "animate-translateYBTop"
            : "animate-translateYTBottom"
        }`}
      >
        <h2 className="text-xl font-bold text-primary-dark-300 underline decoration-primary-green-300 underline-offset-8 below397:text-base">
          {translate(headerTranslate)}
        </h2>
      </AnimateInView>
      <div className="mt-8 grid grid-cols-2-320 gap-10 below768:grid-cols-1">
        {design.map((items: any) => {
          let { id, title } = items;

          return (
            <div className="flex flex-row" key={id}>
              <span
                className={`
                   animate-slide pr-2 text-2xl
                text-primary-green-300 delay-75 duration-75`}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
              <AnimateInView
                styling={`${
                  id % 2 === 0
                    ? "animate-translateXRightLeft"
                    : "animate-translateXleftRight"
                } `}
              >
                <h5 className="font-semibold text-primary-dark-100">{title}</h5>
              </AnimateInView>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
