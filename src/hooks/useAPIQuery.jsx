import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useAPIQuery = (address, languageCode) => {
  const fetchAPI = () => {
    return api.get(`${address}`, {
      params: {
        language: languageCode,
      },
    });
  };
  return useQuery({
    queryKey: [`${address}`],
    queryFn: fetchAPI,
    select: (result) => result.data,
  });
};
