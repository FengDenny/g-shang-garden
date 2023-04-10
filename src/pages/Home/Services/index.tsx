import React from "react";
import { translate, translateObjArr } from "@/components/i18nTranslate/helper";

type Props = {};

const index = (props: Props) => {
  const services = translateObjArr("service.services");
  const aLinkUnderLine =
    " bg-zeroThree  bg-0-100  bg-no-repeat transition-bgSize5sEaseInOut  hover:bg-OneHund3Pixel bg-gradient-yellow ";

  return (
    <section className=" ml-4  mt-4 w-4/6 p-10 xs:mx-auto">
      <div className="flex flex-col">
        <h6 className=" text-primary-green-300 underline decoration-primary-dark-300 underline-offset-4">
          {translate("service.title")}
        </h6>
        <h2 className="pt-2 text-2xl font-extrabold text-primary-dark-300">
          {translate("service.header")}
        </h2>
      </div>
      <div
        className="mt-6 grid grid-cols-2 
      gap-x-20 gap-y-4
      below768:grid-cols-1 
      sm:gap-x-40
      md:gap-x-10
      
      "
      >
        {services.map((items: any) => {
          const { id, title, description, svg, preview } = items;

          return (
            <div key={id} className="flex flex-col py-10">
              <img
                src={svg}
                alt="title"
                className="h-12 w-12 rounded-full bg-primary-grey-100 p-2"
              />
              <h2 className="mt-4 font-extrabold text-primary-dark-300 xs:w-fit xs:text-lg sm:text-xl">
                {translate(title)}
              </h2>
              <p
                className=" text-fontCalc 
                 pt-4 leading-8
                  text-primary-dark-100  
                  xs:line-clamp-[8]
                  sm:w-80
                  sm:pr-20
                  lg:w-[26rem]
                "
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
      </div>
    </section>
  );
};

export default index;
