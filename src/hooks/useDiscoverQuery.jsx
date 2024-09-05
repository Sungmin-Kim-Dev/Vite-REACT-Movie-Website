import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useDiscoverQuery = (category) => {
  const fetchDiscover = () => {
    return api.get(`discover/${category}`, {
      params: {
        language: "en-US",
      },
    });
  };
  return useQuery({
    queryKey: [`discover-${category}`],
    queryFn: fetchDiscover,
    select: (result) => result.data,
  });
};
