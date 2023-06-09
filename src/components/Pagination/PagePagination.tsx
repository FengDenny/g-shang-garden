import React, { useState, useEffect, useCallback } from "react";
import { imgResources } from "@/api/resources";
import Pagination from "./index";
import { FaSpinner } from "react-icons/fa";

type Props = {
  path: string;
  faStyling?: string;
};

const PagePagination = ({ path, faStyling }: Props) => {
  const [length, setLength] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<Array<{}>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      // setIsLoading(true);
      setIsLoading(!isLoading);
      setLength(total_count);
      setItems(response.resources);
    });
  }, [length]);

  return (
    <div className="ml-2 mt-10">
      {isLoading ? (
        <div className="mx-auto ">
          <FaSpinner className="relative mx-auto my-5 animate-spin  text-5xl " />
        </div>
      ) : (
        <div className="grid below768:grid-cols-2 xs:grid-cols-1  sm:grid-cols-3">
          {currentData?.map((item: any) => {
            const { asset_id, secure_url, display_name } = item;
            return (
              <div key={asset_id} className="mb-4">
                <img
                  src={secure_url}
                  alt={display_name}
                  className="w-11/12 rounded-md shadow-xl"
                />
              </div>
            );
          })}
        </div>
      )}
      <div>
        <Pagination
          totalRecords={length}
          pageLimit={LIMIT}
          pageNeighbors={2}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PagePagination;
