import Banner from "./Components/Banner";
import MovieSlide from "../components/common/MovieSlide";
import { useTranslation } from "react-i18next";

// 1. Banner - Top Popular movies
// 2. Popular Movies
// 3. Top Rated Movies
// 4. Upcoming Movies

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Banner />
      <MovieSlide
        address="trending/movie/day"
        slideName={t(`MovieNowTrending`)}
      />
      <MovieSlide address="movie/popular" slideName={t(`PopularMovies`)} />
      <MovieSlide address="movie/now_playing" slideName={t(`NowPlaying`)} />
      <MovieSlide address="movie/top_rated" slideName={t(`TopRatedMovies`)} />
      <MovieSlide address="movie/upcoming" slideName={t(`Upcoming`)} />
    </div>
  );
};

export default Homepage;
