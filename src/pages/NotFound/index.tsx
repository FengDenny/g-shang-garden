import React from 'react'
import PageSection from "@/components/SectionHeader/PageSection";
import { translate } from '@/components/i18nTranslate/helper';
import { useNavigate } from "react-router-dom";
import { Heading3, Paragraphs } from "@/components/About";
import NotFound from"@/assets/notFound.svg"
type Props = {}

const index = (props: Props) => {
    const navigate = useNavigate();

  return (
    <PageSection tString='notFound.title'>
        <div className="mx-auto py-10 sm:w-90 xs:w-full items-center flex flex-col ">
           <img src={NotFound} alt="Not Found - 404" className="w-5/12 xs:w-60"/>
           <Heading3 tString="notFound.header" styling="pt-10 text-3xl font-bold"/>
           <div className="text-center description-text ">
           <Paragraphs tString="notFound.description"/>
           </div>
           <button className="p-2 border mt-10 w-48 rounded-lg border-primary-dark-100 bg-primary-dark-100
           text-bg-color-white font-bold transition-all delay-75 duration-75
           hover:border-primary-dark-300 hover:bg-primary-dark-300" onClick={()=> navigate("/")}>{translate("notFound.btn")}</button>
        </div>
    </PageSection>
  )
}

export default index