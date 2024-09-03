import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useMoviesQuery = (category) => {
  const fetchMovies = () => {
    return api.get(`/movie/${category}`);
  };
  return useQuery({
    queryKey: [`movie-${category}`],
    queryFn: fetchMovies,
    select: (result) => result.data,
  });
};
