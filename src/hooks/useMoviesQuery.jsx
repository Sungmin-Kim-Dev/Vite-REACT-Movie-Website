import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useMoviesQuery = (category, languageCode) => {
  const fetchMovies = (category, languageCode) => {
    return api.get(`movie/${category}`, {
      params: {
        language: languageCode,
      },
    });
  };
  return useQuery({
    queryKey: ["movie", category],
    queryFn: () => fetchMovies(category, languageCode),
    select: (result) => result.data,
  });
};
