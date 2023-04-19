import React, { useState } from "react";
import { GalleryTabs } from "@/data/tabs";
import Tabs from "@/components/Tabs";

type Props = {};

const index = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(GalleryTabs[0].id);
  return (
    <div className="mx-auto mt-40 w-[90%] p-4">
      <Tabs
        tabs={GalleryTabs}
        selectedTab={selectedTab}
        onClick={setSelectedTab}
      />
    </div>
  );
};

export default index;
