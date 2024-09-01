import { usePopularMoviesQuery } from "@/hooks/usePopularMovies";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.table("data:", data);

  if (isLoading) {
    return <div className="size-14 bg-red-500">Loading</div>;
  }
  if (isError) {
    return (
      <Alert variant="destructive" className="mx-auto mt-14 w-fit px-8">
        <div className="flex gap-4">
          <AlertCircle className="mt-1 size-6" />
          <div>
            <AlertTitle className="text-2xl">Error</AlertTitle>
            <AlertDescription className="text-xl">
              {error.message}
            </AlertDescription>
          </div>
        </div>
      </Alert>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.results[0].backdrop_path})`,
      }}
      className="h-[56dvh] bg-cover bg-center bg-no-repeat pb-16 pl-24 before:absolute before:left-0 before:h-[56dvh] before:w-full before:bg-gradient-to-t before:from-black before:to-transparent"
    >
      <div className='w-2/5 h-full text-gray-200 justify-end flex flex-col relative z-10 space-y-6'>
        <h1 className='text-3xl font-semibold'>{data?.results[0].title}</h1>
        <p className='text-lg'>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
