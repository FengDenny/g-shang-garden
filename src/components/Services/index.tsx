import React from "react";
import { translate } from "@/components/i18nTranslate/helper";

type Props = {
  services: {
    id: number;
    title: string;
    description: string;
    svg: string;
    preview: string;
  }[];
  active: number;
  onMouseEnter: (id: number) => void;
};

const index = ({
  services = [],
  active = 0,
  onMouseEnter,
}: Props): JSX.Element => {
  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-yellow ";

  return (
    <>
      {services.map((item) => {
        const { id, svg, title, description, preview } = item;

        return (
          <div
            key={id}
            className={`${
              active === id
                ? "rounded-lg hover:bg-color-white hover:px-4 hover:drop-shadow-lg hover:ease-in"
                : ""
            } flex flex-col py-4 transition-colors delay-75 duration-75`}
            onMouseEnter={() => onMouseEnter(id)}
          >
            <img
              src={svg}
              alt="title"
              className="mt-2 h-12 w-12 rounded-full bg-primary-grey-100 p-2"
            />
            <h2 className="mt-3 font-extrabold text-primary-dark-300 xs:w-fit xs:text-lg sm:text-xl">
              {translate(title)}
            </h2>
            <p
              className=" text-fontCalc pt-2 leading-8   text-primary-dark-100
            xs:line-clamp-[8] sm:w-72 sm:pr-20
            md:w-[25rem] lg:w-[30rem]"
            >
              {translate(description)}
            </p>

            <a
              href={preview}
              className={`${aLinkUnderLine}  mt-2 w-[5.5rem] hover:text-primary-green-300`}
            >
              {translate("service.preview")}
            </a>
          </div>
        );
      })}
    </>
  );
};

export default index;
