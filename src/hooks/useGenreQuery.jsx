import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useGenreQuery = (category) => {
  const languageCode = useSelector((state) => state.code.code);
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
