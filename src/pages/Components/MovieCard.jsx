/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { useGenreQuery } from "@/hooks/useGenreQuery";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: movieGenreData } = useGenreQuery("movie");
  const showGenre = (genreIdList) => {
    if (!movieGenreData) return [];
    const genreNameList = genreIdList.map((id) => {
      return movieGenreData.find((genre) => genre.id === id).name;
    });
    // console.log(genreNameList);
    return genreNameList;
  };
  // console.log(movieGenreData);
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    navigate(`/movies/${movie?.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="group/card relative cursor-pointer overflow-hidden rounded-xl outline outline-2 outline-offset-4 aspect-[2/3] outline-white/0 transition-all duration-300 before:absolute before:inset-0 before:block before:bg-slate-800 before:opacity-0 before:duration-300 hover:scale-105 hover:outline-white hover:before:opacity-50"
      onClick={navigateToDetailPage}
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          className="size-full object-cover"
        />
      ) : (
        <div className="peer/info h-full bg-zinc-600"></div>
      )}
      <div className="movie-info absolute bottom-3 translate-y-full px-4 transition-all duration-300 group-hover/card:translate-y-0 peer-empty/info:translate-y-0">
        <p className="my-3 text-2xl font-bold">{movie?.title}</p>
        <div className="badge-box md mb-2 flex flex-wrap gap-3">
          {showGenre(movie.genre_ids)?.map((id, index) => (
            <Badge
              key={index}
              className="bg-orange-600 text-sm hover:bg-orange-600"
            >
              {id}
            </Badge>
          ))}
        </div>

        <div className="space-y-1 text-lg">
          <div className="flex items-center gap-x-1">
            <FaStar className="text-yellow-300" />
            {Math.round(movie?.vote_average * 10) / 10}
          </div>
          <div>{movie?.release_date}</div>
        </div>
      </div>
      {movie?.vote_average >= 8 ? (
        <div className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-slate-800/50">
          <FaThumbsUp className="m-3 size-5 text-slate-100/80" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieCard;
