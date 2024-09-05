import Banner from "./Components/Banner";
import MovieSlide from "../components/common/MovieSlide";

// 1. Banner - Top Popular movies
// 2. Popular Movies
// 3. Top Rated Movies
// 4. Upcoming Movies

const Homepage = () => {
  return (
    <div>
      <Banner />
      <MovieSlide
        address="trending/movie/day"
        slideName="Movie Now Trending"
      />
      <MovieSlide address="movie/popular" slideName="Popular Movies" />
      <MovieSlide address="movie/now_playing" slideName="Now Playing" />
      <MovieSlide address="movie/top_rated" slideName="Top Rated" />
      <MovieSlide address="movie/upcoming" slideName="Upcoming" />
    </div>
  );
};

export default Homepage;
