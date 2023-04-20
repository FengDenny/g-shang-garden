import React from "react";
import PagePagination from "@/components/Pagination/PagePagination";

type Props = {};

const index = (props: Props) => {
  return (
    <section className="mx-auto mt-40 w-[90%] p-4">
      <div className="mx-auto w-9/12">
        <PagePagination path="garden" />
      </div>
    </section>
  );
};

export default index;
