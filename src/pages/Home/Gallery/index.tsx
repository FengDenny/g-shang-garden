import React, { useState } from "react";
// import { GalleryTabs } from "@/data/tabs";
import Tabs from "@/components/Tabs";
import { translate, translateTabsObj } from "@/components/i18nTranslate/helper";
import PageTitle from "@/components/Helmet";

type Props = {};

const index = (props: Props) => {
  const GalleryTabs = translateTabsObj("gallery.tabs");
  const [selectedTab, setSelectedTab] = useState<number>(GalleryTabs[0].id);

  return (
    <>
      <PageTitle pageTitle={translate("gallery.title")} />
      <section className="mx-auto mt-40 w-[90%] p-4">
        <Tabs
          tabs={GalleryTabs}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
        />
      </section>
    </>
  );
};

export default index;
