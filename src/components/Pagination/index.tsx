import { range } from "./range";
import Button from "./Button";

type Props = {
  totalRecords: number;
  pageLimit: number;
  pageNeighbors: number;
  onPageChanged: (e: any, page: number) => void;
  currentPage: number;
};

const index = ({
  totalRecords,
  pageLimit,
  pageNeighbors,
  onPageChanged,
  currentPage,
}: Props) => {
  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";

  const totalPages = Math.ceil(totalRecords / pageLimit);

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];
  return (
    <nav
      aria-label="Countries Pagination"
      className="mt-2 w-80 rounded-md
      bg-primary-grey-100 p-2 drop-shadow-lg
      "
    >
      <ul className="mx-auto flex w-full flex-row justify-center text-lg font-bold">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <Button
                index={index}
                styling={"w-10 border p-2 hover:bg-primary-green-300"}
                ariaLabel="Previous"
                page={pageNeighbors}
                onPageChanged={(e: any) =>
                  onPageChanged(e, pageNeighbors * 2 - 1)
                }
              >
                <span aria-hidden="true">&laquo;</span>
              </Button>
            );

          if (page === RIGHT_PAGE)
            return (
              <Button
                index={index}
                styling={"w-10 border p-2 hover:bg-primary-green-300"}
                ariaLabel="Next"
                page={pageNeighbors}
                onPageChanged={(e: any) =>
                  onPageChanged(e, pageNeighbors * 2 + 2)
                }
              >
                <span aria-hidden="true">&raquo;</span>
              </Button>
            );

          return (
            <Button
              index={index}
              current={`${currentPage === page ? " bg-primary-green-300" : ""}`}
              styling="border p-2"
              ariaLabel="Change page"
              page={pageNeighbors}
              onPageChanged={(e: any) => onPageChanged(e, page)}
            >
              {page}
            </Button>
          );
        })}
      </ul>
    </nav>
  );
};

export default index;
