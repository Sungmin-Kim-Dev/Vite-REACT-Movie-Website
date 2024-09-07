import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useReviewQuery = (id, languageCode) => {
  const fetchReviews = (id, languageCode) => {
    return api.get(`movie/${id}/reviews`, {
      params: {
        language: languageCode,
      },
    });
  };
  return useQuery({
    queryKey: ["movie-review", id],
    queryFn: () => fetchReviews(id, languageCode),
    select: (result) => result.data,
  });
};
