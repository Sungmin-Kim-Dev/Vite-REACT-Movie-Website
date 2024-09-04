import ErrorCard from "@/components/common/ErrorCard";
import MovieCard from "@/components/common/MovieCard";
import SlideSkeleton from "@/components/common/SlideSkeleton";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

// Pagination
// page state
// as clicking pagination, change pages

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

const MoviesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useMovieSearch(keyword, page);
  console.log(data);

  const handlePageClick = ({ selected }) => {
    console.log(selected + 1);
    setPage(selected + 1);
  };

  if (isLoading) {
    return <SlideSkeleton />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  return (
    <div className="global-px pb-10">
      <h1 className="my-10 text-center text-4xl font-extrabold">Movies</h1>
      <div className="genre-button-box mb-10 h-10 overflow-x-visible">
        Movie Genre Buttons filtering
        {/* px-4 gap-x-5 bg-[#364154] hover:bg-[#F9F9F9CC] hover:text-black */}
      </div>
      <div className="my-8">
        <div className="grid grid-cols-2 gap-5 py-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
          {data?.results.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        forcePage={page - 1}
        // page limit to 50
        pageCount={data?.total_pages > 50 ? 50 : data.total_pages} // Total page
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
    </div>
  );
};

export default MoviesPage;
