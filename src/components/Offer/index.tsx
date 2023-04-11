import React from "react";
import { translate } from "@/components/i18nTranslate/helper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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
      <h2 className="text-xl font-bold text-primary-dark-300 underline decoration-primary-green-300 underline-offset-8 below397:text-base ">
        {translate(headerTranslate)}
      </h2>
      <div className="mt-8 grid grid-cols-2-320 gap-10 below768:grid-cols-1">
        {design.map((items: any) => {
          const { id, title } = items;

          return (
            <div className="flex flex-row" key={id}>
              <span className="text-2xl text-primary-green-300">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
              <h5 className="font-semibold text-primary-dark-100">{title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
