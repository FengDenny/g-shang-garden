import React from "react";
import PagePagination from "@/components/Pagination/PagePagination";
import PageSection from "@/components/SectionHeader/PageSection";
type Props = {};

const index = (props: Props) => {
  return (
    <PageSection tString="gardenTitle">
      <div className="mx-auto w-9/12">
        <PagePagination path="garden" />
      </div>
    </PageSection>
  );
};

export default index;
