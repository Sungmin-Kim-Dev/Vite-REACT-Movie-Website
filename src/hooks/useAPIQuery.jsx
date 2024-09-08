import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export const useAPIQuery = (address) => {
  const languageCode = useSelector((state) => state.code.code);
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
