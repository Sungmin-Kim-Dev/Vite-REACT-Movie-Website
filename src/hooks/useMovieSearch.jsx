import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieSearch = (keyword, page, languageCode) => {
  return keyword
    ? api.get(`search/movie?query=${keyword}&page=${page}`, {
        params: {
          language: languageCode,
        },
      })
    : api.get(`discover/movie?page=${page}`, {
        params: {
          language: languageCode,
        },
      });
};
export const useMovieSearch = (keyword, page, languageCode) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page, languageCode],
    queryFn: () => fetchMovieSearch(keyword, page, languageCode),
    select: (result) => result.data,
  });
};
