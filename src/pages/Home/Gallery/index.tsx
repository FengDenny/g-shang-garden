import React, { useState } from "react";
import Tabs from "@/components/Tabs";
import { translateTabsObj } from "@/components/i18nTranslate/helper";
import PageSection from "@/components/SectionHeader/PageSection";

type Props = {};

const index = (props: Props) => {
  const GalleryTabs = translateTabsObj("gallery.tabs");
  const [selectedTab, setSelectedTab] = useState<number>(GalleryTabs[0].id);

  return (
    <>
      <PageSection tString="gallery.title">
        <Tabs
          tabs={GalleryTabs}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
        />
      </PageSection>
    </>
  );
};

export default index;
