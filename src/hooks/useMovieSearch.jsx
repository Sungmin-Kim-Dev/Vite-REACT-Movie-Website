import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMovieSearch = (keyword, page, languageCode) => {
  // api.get(`search/movie?search/keyword/query=${keyword}`, {
  //   params: {
  //     language: languageCode,
  //   },
  // });
  return keyword
    ? api.get(`search/movie?query=${keyword}&page=${page}`, {
        params: {
          language: languageCode,
        },
      })
    : api.get(
        `discover/movie?page=${page}&include_adult=true`,
        {
          params: {
            language: languageCode,
          },
        },
      );
};
// const getKeywordList =

// const url = 'https://api.themoviedb.org/3/search/keyword?query=marvel&page=1';

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const useMovieSearch = (keyword, page, languageCode) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page, languageCode],
    queryFn: () => fetchMovieSearch(keyword, page, languageCode),
    select: (result) => result.data,
  });
};
