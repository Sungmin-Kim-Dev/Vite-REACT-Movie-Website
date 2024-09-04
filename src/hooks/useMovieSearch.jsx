import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useMovieSearch = (keyword) => {
  const fetchMovieSearch = () => {
    return keyword
      ? api.get(`search/movie?query=${keyword}`)
      : api.get(`movie/popular`);
  };
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: fetchMovieSearch,
    select: (result) => result.data,
  });
};
