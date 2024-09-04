/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { useMovieGenreQuery } from "@/hooks/useMovieGenre";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const { data: movieGenreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!movieGenreData) return [];
    const genreNameList = genreIdList.map((id) => {
      return movieGenreData.find((genre) => genre.id === id).name;
    });
    // console.log(genreNameList);
    return genreNameList;
  };

  return (
    <div className="group/card relative cursor-pointer overflow-hidden rounded-xl outline outline-2 outline-offset-4 outline-white/0 transition-all duration-300 before:absolute before:block before:aspect-[4/6] before:w-full before:bg-slate-800 before:opacity-0 before:duration-300 hover:scale-105 hover:outline-white hover:before:opacity-70">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title ? movie.title : movie.name}
        className="w-full duration-300 group-hover/card:blur-[3px]"
      />
      <div className="movie-info absolute bottom-3 translate-y-full px-4 transition-all duration-300 group-hover/card:translate-y-0">
        <p className="my-3 text-2xl font-bold">
          {movie.title ? movie.title : movie.name}
        </p>
        {movie.media_type === "tv" ? (
          ""
        ) : (
          <div className="badge-box md mb-2 flex flex-wrap gap-3">
            {showGenre(movie.genre_ids).map((id, index) => (
              <Badge
                key={index}
                className="bg-orange-600 text-lg hover:bg-orange-600"
              >
                {id}
              </Badge>
            ))}
          </div>
        )}
        <div className="space-y-1 text-lg">
          <div className="flex items-center gap-x-1">
            <FaStar />
            {Math.round(movie.vote_average * 10) / 10}
          </div>
          <div>
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </div>
        </div>
      </div>
      {movie.vote_average >= 8 ? (
        <div className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-slate-800/50">
          <FaThumbsUp className="m-4 size-5" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieCard;
