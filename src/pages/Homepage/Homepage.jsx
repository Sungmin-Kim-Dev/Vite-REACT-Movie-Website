import Banner from "./Components/Banner";
import MovieSlide from "./Components/MovieSlide";
// 1. Banner - Top Popular movies
// 2. Popular Movies
// 3. Top Rated Movies
// 4. Upcoming Movies

const Homepage = () => {
  return (
    <div>
      <Banner />
      <MovieSlide category="popular" slideName="Top Popular Movies" />
      <MovieSlide category="now_playing" slideName="Now Playing" />
      <MovieSlide category="top_rated" slideName="Top Rated" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
      <MovieSlide category="upcoming" slideName="Upcoming" />
    </div>
  );
};

export default Homepage;
