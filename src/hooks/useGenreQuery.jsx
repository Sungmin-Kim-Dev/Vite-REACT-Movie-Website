import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchGenre = (category) => {
  return api.get(`genre/${category}/list`, {
    params: {
      language: "en-US",
    },
  });
};

export const useGenreQuery = (category) => {
  return useQuery({
    queryKey: [`${category}-genre`],
    queryFn: () => fetchGenre(category),
    select: (result) => result.data.genres,
    staleTime: 1800000,
  });
};
