import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useAPIQuery = (address) => {
  const fetchAPI = () => {
    return api.get(`/${address}`);
  };
  return useQuery({
    queryKey: [`${address}`],
    queryFn: fetchAPI,
    select: (result) => result.data,
  });
};
