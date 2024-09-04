import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieSearch = (keyword, page) => {
  return keyword
    ? api.get(`search/movie?query=${keyword}&page=${page}`)
    : api.get(`movie/popular?page=${page}`);
};
export const useMovieSearch = (keyword, page) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: () => fetchMovieSearch(keyword, page),
    select: (result) => result.data,
  });
};
