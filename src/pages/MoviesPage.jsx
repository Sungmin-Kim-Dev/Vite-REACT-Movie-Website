import ErrorCard from "@/components/common/ErrorCard";
import MovieCard from "@/components/common/MovieCard";
import PaginationComponent from "@/components/common/PaginationComponent";
import SlideSkeleton from "@/components/common/SlideSkeleton";
import { Button } from "@/components/ui/button";
import { useGenreQuery } from "@/hooks/useGenreQuery";
import { useMovieSearch } from "@/hooks/useMovieSearch";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

// Pagination
// page state
// as clicking pagination, change pages

const MoviesPage = () => {
  const languageCode = useSelector((state) => state.code.code);
  const { data: movieGenreData } = useGenreQuery("movie", languageCode);
  // console.log(movieGenreData);

  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useMovieSearch(
    keyword,
    page,
    languageCode,
  );
  const [genreFilteredData, setGenreFilteredData] = useState(data?.results);
  const [filteredGenreName, setFilteredGenreName] = useState("");
  // console.log(data);
  const filterDataByGenre = (id) => {
    if (!movieGenreData) return [];
    // console.log(id);

    const filteredData = data.results.filter((item) =>
      item.genre_ids.includes(id),
    );
    // console.log(filteredData);
    setFilteredGenreName(movieGenreData.find((genre) => genre.id === id).name);
    setGenreFilteredData(filteredData);
  };

  const handlePageClick = ({ selected }) => {
    // console.log(selected + 1);
    setPage(selected + 1);
  };
  const { t } = useTranslation();

  useEffect(() => {
    setPage(1);
    setFilteredGenreName();
  }, [keyword, filteredGenreName]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (isLoading) {
    return <SlideSkeleton />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  const displayedMovies = genreFilteredData ? genreFilteredData : data?.results;

  return (
    <div className="global-px pb-10">
      <h1 className="my-10 text-center text-4xl font-extrabold">
        {t(`Movies`)}
      </h1>
      <div className="genre-button-box mb-10 flex flex-wrap gap-5">
        {movieGenreData?.map((item, index) => (
          // console.log(item);
          <Button
            key={index}
            className="cursor-pointer rounded-md bg-[#364154] px-4 py-2 text-lg hover:bg-[#F9F9F9CC] hover:text-black"
            onClick={() => filterDataByGenre(item.id)}
          >
            {item.name}
          </Button>
        ))}
        {/* px-4 gap-x-5 bg-[#364154] hover:bg-[#F9F9F9CC] hover:text-black */}
      </div>
      {displayedMovies?.length == 0 ? (
        <div className="mb-auto text-center text-3xl font-bold md:text-5xl">
          {keyword && !filteredGenreName
            ? t("NoResults", { keyword: keyword })
            : `No item for ${filteredGenreName}`}
        </div>
      ) : (
        <>
          <div className="my-8">
            <div className="grid grid-cols-2 gap-5 py-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
              {displayedMovies?.map((movie, index) => (
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
