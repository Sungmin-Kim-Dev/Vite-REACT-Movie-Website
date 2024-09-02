/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";

const MovieCard = ({ movie }) => {
  return (
    <div className="group/card relative cursor-pointer overflow-hidden rounded-lg outline outline-2 outline-offset-4 outline-white/0 transition-all duration-500 before:absolute before:block before:aspect-[4/6] before:w-full before:bg-slate-800 before:opacity-0 hover:scale-105 hover:outline-white hover:before:opacity-50">
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
        className=""
      />
      <div className="movie-info absolute bottom-3 translate-y-full px-4 transition-all duration-300 group-hover/card:translate-y-0">
        <p className="my-3 text-xl font-semibold">{movie.title}</p>
        {movie.genre_ids.map((id, index) => (
          <Badge key={index} className="mr-2 bg-orange-600 last:mr-0">
            {id}
          </Badge>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? "over 18" : "under 18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
