import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useMoviesQuery = (category) => {
  const languageCode = useSelector((state) => state.code.code);
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
