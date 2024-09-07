import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useAPIQuery = (address, languageCode) => {
  const fetchAPI = (address, languageCode) => {
    return api.get(`${address}`, {
      params: {
        language: languageCode,
      },
    });
  };
  return useQuery({
    queryKey: [address, languageCode],
    queryFn: () => fetchAPI(address, languageCode),
    select: (result) => result.data,
  });
};
