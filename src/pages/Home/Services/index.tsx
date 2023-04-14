import React, { useState } from "react";
import { translateObjArr } from "@/components/i18nTranslate/helper";
import Header from "@/components/SectionHeader";

import Services from "@/components/Services";

type Props = {};

const index = (props: Props) => {
  const services: Array<any> = translateObjArr("service.services");
  const [active, setActive] = useState(services[0].id);

  return (
    <section className=" mx-auto mt-4 h-full w-5/6 p-10 xs:mx-auto xs:w-full">
      <div className="flex flex-col">
        <Header
          translateHeader={"service.header"}
          translateTitle={"service.title"}
          animateHeader={"animate-moveInRight"}
          animateTitle={"animate-moveInLeft"}
        />
      </div>
      <div
        className="mt-6 grid grid-cols-2 
      gap-x-20 gap-y-4
      below768:grid-cols-1 
      sm:gap-x-40
      md:gap-x-10
      
      "
      >
        <Services
          services={services}
          active={active}
          onMouseEnter={setActive}
        />
      </div>
    </section>
  );
};

export default index;
