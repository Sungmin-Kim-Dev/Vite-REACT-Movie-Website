import { useMoviesQuery } from "@/hooks/useMoviesQuery";
import ErrorCard from "@/components/common/ErrorCard";
import { Skeleton } from "@/components/ui/skeleton";

const Banner = () => {
  const { data, isLoading, isError, error } = useMoviesQuery(1022789);
  console.table("data:", data);

  if (isLoading) {
    return <Skeleton className="global-px h-[56dvh]" />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
      className="global-px h-[56dvh] bg-cover bg-center bg-no-repeat pb-16 before:absolute before:left-0 before:h-[56dvh] before:w-full before:bg-gradient-to-t before:from-black before:to-transparent before:to-60%"
    >
      <div className="relative flex h-full flex-col justify-end space-y-6 text-gray-200 md:w-2/5">
        <h1 className="text-5xl font-semibold">{data.title}</h1>
        <p className="hidden text-xl sm:block">{data.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
