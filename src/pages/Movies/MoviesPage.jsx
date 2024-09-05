import ErrorCard from "@/components/common/ErrorCard";
import MovieCard from "@/components/common/MovieCard";
import PaginationComponent from "@/components/common/PaginationComponent";
import SlideSkeleton from "@/components/common/SlideSkeleton";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Pagination
// page state
// as clicking pagination, change pages

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

  useEffect(() => {
    setPage(1);
  }, [keyword]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
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
      {data?.results.length == 0 ? (
        <div className="mb-auto text-center text-3xl font-bold md:text-5xl">
          No search result for &quot;{keyword}&quot;
          {/* ""에 대한 검색 결과 없음 */}
        </div>
      ) : (
        <>
          <div className="my-8">
            <div className="grid grid-cols-2 gap-5 py-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
              {data?.results.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </div>
          <PaginationComponent
            handlePageClick={handlePageClick}
            page={page}
            total_pages={data?.total_pages}
          />
        </>
      )}
    </div>
  );
};

export default MoviesPage;
