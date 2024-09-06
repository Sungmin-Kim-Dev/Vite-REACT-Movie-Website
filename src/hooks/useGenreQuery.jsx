import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGenreQuery = (category, languageCode) => {
  const fetchGenre = (category, languageCode) => {
    return api.get(`genre/${category}/list`, {
      params: {
        language: languageCode,
      },
    });
  };
  return useQuery({
    queryKey: [`${category}-genre`],
    queryFn: () => fetchGenre(category, languageCode),
    select: (result) => result.data.genres,
    staleTime: 1800000,
  });
};
