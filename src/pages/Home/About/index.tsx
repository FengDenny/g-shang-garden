import React from "react";
import PageSection from "@/components/SectionHeader/PageSection";
import AboutHero from "@/assets/about_hero.jpg";
import { translate } from "@/components/i18nTranslate/helper";
import { Heading3, Paragraphs } from "@/components/About";
import { useNavigate } from "react-router-dom";

type Props = {};

const index = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="relative">
        <img
          src={AboutHero}
          alt="Landscape"
          className="w-full
                   object-cover brightness-50  below397:h-72 sm:h-[75vh]"
        />
        <div className="absolute top-[10%]  mx-auto w-full sm:top-[30%]">
          <h2
            className="z-10 mx-auto animate-appear  
            font-extrabold text-color-white-100 
            below768:mt-20 below768:text-xl xs:w-[70%] xsMin:w-[50%]
            sm:text-3xl
            md:w-[40%]  md:text-4xl"
          >
            <q>
              {translate("about.aboutHero")}
              <span className="text-primary-green-100 md:text-2xl">.</span>
            </q>
            <span className="p-2 text-xl font-normal">-</span>
            <span className="text-lg font-normal text-primary-yellow-300">
              {translate("about.company")}
            </span>
          </h2>
        </div>
      </header>
      <PageSection tString="about.title">
        <div className="mx-auto pb-20 xs:w-full sm:w-4/6 ">
          <Heading3
            styling="text-center text-lg underline underline-offset-2"
            tString="about.aboutHeader"
          />
          <Paragraphs tString="about.descriptionOne" />
          <Paragraphs tString="about.descriptionTwo" />
          <Paragraphs tString="about.descriptionThree" />
          <div className="flex flex-col items-center ">
            <Heading3
              styling="pt-4 text-center text-xl font-bold underline underline-offset-2"
              tString="about.ctaHeader"
            />
            <button
              className="mt-4 h-10 w-40 rounded-lg 
            bg-primary-green-300 p-2 text-color-white-100 shadow-xl 
            transition-all delay-75 duration-75 hover:bg-primary-green-100"
              onClick={() => navigate("/contact")}
            >
              {translate("about.ctaBtnString")}
            </button>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default index;
