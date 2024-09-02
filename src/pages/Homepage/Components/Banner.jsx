import { useMoviesQuery } from "@/hooks/useMoviesQuery";
import LoadingCard from "@/layout/components/LoadingCard";
import ErrorCard from "@/layout/components/ErrorCard";

const Banner = () => {
  const { data, isLoading, isError, error } = useMoviesQuery("popular");
  console.table("data:", data);

  if (isLoading) {
    return <LoadingCard />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  const topMovie = data.results[1];
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${topMovie.backdrop_path})`,
      }}
      className="global-px h-[56dvh] bg-cover bg-center bg-no-repeat pb-16 before:absolute before:left-0 before:h-[56dvh] before:w-full before:bg-gradient-to-t before:from-black before:to-transparent"
    >
      <div className="relative z-10 flex h-full flex-col justify-end space-y-6 text-gray-200 sm:w-2/5">
        <h1 className="text-3xl font-semibold">{topMovie.title}</h1>
        <p className="hidden text-lg sm:block">{topMovie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
