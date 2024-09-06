import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Home: "Home",
      Search: "Search",
      WatchList: "Watch List",
      Movies: "Movies",
      Series: "Series",
      Language: "Language",
      English: "English",
      Korean: "Korean",
      SearchText: "Search Movies and Series",
      NoResults: 'No search result for "{{keyword}}"',
      Keyword: "Enter Keyword",
      MovieNowTrending: "Movie Now Trending",
      PopularMovies: "Popular Movies",
      NowPlaying: "Now Playing",
      TopRatedMovies: "Top Rated Movies",
      Upcoming: "Upcoming",
    },
  },
  ko: {
    translation: {
      Home: "홈",
      Search: "검색",
      WatchList: "관심 콘텐츠",
      Movies: "영화",
      Series: "시리즈",
      Language: "언어",
      English: "영어",
      Korean: "한국어",
      SearchText: "영화와 시리즈를 검색해 보세요",
      NoResults: '"{{keyword}}"에 대한 검색 결과 없음',
      Keyword: "키워드 입력",
      MovieNowTrending: "영화 트렌드",
      PopularMovies: "인기 영화",
      NowPlaying: "지금 상영 중",
      TopRatedMovies: "명작 영화",
      Upcoming: "신작 영화",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
