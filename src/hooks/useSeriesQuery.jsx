import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useSeriesQuery = (category) => {
  const fetchSeries = () => {
    return api.get(`tv/${category}`, {
      params: {
        language: "en-US",
      },
    });
  };
  return useQuery({
    queryKey: [`series-${category}`],
    queryFn: fetchSeries,
    select: (result) => result.data,
  });
};
