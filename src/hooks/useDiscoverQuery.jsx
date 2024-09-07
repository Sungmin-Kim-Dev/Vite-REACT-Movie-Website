import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const useDiscoverQuery = (category) => {
  const fetchDiscover = () => {
    return api.get(`discover/${category}?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&q=marvel`, {
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
