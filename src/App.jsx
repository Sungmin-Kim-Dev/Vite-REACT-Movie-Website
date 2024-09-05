import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import WatchListPage from "./pages/WatchListPage";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetailPage from "./pages/SeriesDetailPage";

// Homepage  /
// movie all page  /movies?q=
// movie detail page  /movies/:id

function App() {
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
