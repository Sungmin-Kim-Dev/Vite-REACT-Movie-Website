import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const useDiscoverQuery = (category, languageCode) => {
  const fetchDiscover = (category, languageCode) => {
    return api.get(
      `discover/${category}`,
      {
        params: {
          language: languageCode,
        },
      },
    );
  };
  return useQuery({
    queryKey: ["discover", category, languageCode],
    queryFn: () => fetchDiscover(category, languageCode),
    select: (result) => result.data,
  });
};
