import React from "react";
import Logo from "@/assets/logo.png";
import { translate } from "../i18nTranslate/helper";
import Links from "@/components/Links";
import SelectMenu from "@/components/Menu/Select/SelectMenu";
type Props = {};

const index = (props: Props) => {
  return (
    <footer className="flex justify-between bg-primary-green-300 below768:flex-col sm:flex-row">
      <div className="flex w-3/6  flex-col p-10 below768:w-[90%] md:mx-auto">
        <img
          src={Logo}
          alt="G Shang Garden logo"
          className="relative h-16 w-16 below768:mx-auto sm:h-20 sm:w-20"
        />
        <h6
          className="pl-3 pt-2 text-base font-bold 
        text-color-white-100 below768:mx-auto"
        >
          {translate("copyright")}
        </h6>
        <div className="mx-auto mt-2 sm:mx-0 sm:pl-4">
          <SelectMenu styling="w-28 sm:w-40 " />
        </div>
      </div>
      <div
        className=" w-5/6 basis-1/3  below768:mx-auto below768:w-[51%]
 xs:py-2 sm:mt-20"
      >
        <Links
          styling=" text-lg text-color-white  grid grid-cols-3-90 xs:grid-cols-2-110  below397:grid-cols-1"
          liStlying="w-20"
        />
      </div>
      <div
        className="flex w-3/6  basis-1/2 flex-row below768:mx-auto
      below768:w-[51%] below768:flex-col  xs:py-2 sm:mt-20"
      >
        <div className="below768:pt-4">
          <h3 className="font-bold text-primary-yellow-100 underline underline-offset-2">
            {translate("footer.contact.title")}
          </h3>
          <h6 className="text-color-white">
            {translate("footer.contact.description")}
          </h6>
        </div>
        <div className=" below768:pl-0 below768:pt-2 sm:px-4">
          <h3 className="font-bold text-primary-yellow-100 underline underline-offset-2">
            {translate("footer.telephone.title")}
          </h3>
          <h6 className="text-color-white">
            {translate("footer.telephone.description")}
          </h6>
        </div>
        <div className=" below768:px-0 below768:pt-2 sm:px-4">
          <h3 className="font-bold text-primary-yellow-100 underline underline-offset-2">
            {translate("footer.email.title")}
          </h3>
          <h6 className="text-color-white">
            {translate("footer.email.description")}
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default index;
