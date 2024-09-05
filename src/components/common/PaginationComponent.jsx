/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import ReactPaginate from "react-paginate";

const PagePrevBtn = () => {
  return (
    <>
      <ChevronLeft className="size-6" />
      <span>Previous</span>
    </>
  );
};
const PageNextBtn = () => {
  return (
    <>
      <span>Next</span>
      <ChevronRight className="size-6" />
    </>
  );
};

const PaginationComponent = ({ handlePageClick, page, total_pages }) => {
  return (
    <ReactPaginate
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      initialPage={page - 1}
      // page limit to 50
      pageCount={total_pages > 50 ? 50 : total_pages} // Total page
      renderOnZeroPageCount={null}
      previousLabel={<PagePrevBtn />}
      nextLabel={<PageNextBtn />}
      breakLabel={<MoreHorizontal />}
      containerClassName="mx-auto flex w-full justify-center items-center gap-1"
      previousLinkClassName="pagination-btn pl-2.5 pr-4"
      nextLinkClassName="pagination-btn pl-4 pr-2.5"
      pageLinkClassName="pagination-item"
      breakLinkClassName="pagination-item"
      activeLinkClassName="pagination-item hover:border-0 border border-neutral-300"
      disabledLinkClassName="pagination-btn-disabled"
    />
  );
};

export default PaginationComponent;
