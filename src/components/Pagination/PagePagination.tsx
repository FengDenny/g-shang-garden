import React, { useState, useEffect, useCallback } from "react";
import { imgResources } from "@/api/resources";
import Pagination from "./index";

type Props = {
  path: string;
};

const PagePagination = ({ path }: Props) => {
  const [length, setLength] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<Array<{}>>();
  let LIMIT = 10;

  const onPageChanged = useCallback(
    (event: any, page: number) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const currentData = items?.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

  useEffect(() => {
    imgResources(path).then((response) => {
      const { total_count } = response;
      setLength(total_count);
      setItems(response.resources);
    });
  }, [length]);

  return (
    <div>
      <div>
        {currentData?.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h3>{item.display_name}</h3>
            </div>
          );
        })}
      </div>
      <Pagination
        totalRecords={length}
        pageLimit={LIMIT}
        pageNeighbors={2}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PagePagination;
