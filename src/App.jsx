import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import WatchListPage from "./pages/WatchListPage";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetailPage from "./pages/SeriesDetailPage";
import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import i18n from "./utils/i18n";
import { useDispatch } from "react-redux";
import { setCode } from "./redux/slice/languageCodeSlice";

// Homepage  /
// movie all page  /movies?q=
// movie detail page  /movies/:id

function App() {
  // const langCode = useSelector((state) => state.code.code);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [languageCode] = useLocalStorage("languageCode", "en-US");

  const dispatch = useDispatch();
  const language = languageCode.slice(0, 2);
  const country = languageCode.slice(3, 5);
  dispatch(setCode({ language, country }));
  i18n.changeLanguage(language);

  useEffect(() => {
    searchParams.set("language", languageCode);
    setSearchParams(searchParams, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageCode, pathname]);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        <Route path="/series">
          <Route index element={<SeriesPage />} />
          <Route path=":id" element={<SeriesDetailPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
