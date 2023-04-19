import React from "react";
import PagePagination from "@/components/Pagination/PagePagination";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="mx-auto mt-40 w-4/6">
      <PagePagination path={"all design"} />
    </div>
  );
};

export default index;
