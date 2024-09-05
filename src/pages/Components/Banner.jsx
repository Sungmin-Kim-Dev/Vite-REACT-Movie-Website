import { useMoviesQuery } from "@/hooks/useMoviesQuery";
import ErrorCard from "@/components/common/ErrorCard";
import { Skeleton } from "@/components/ui/skeleton";

const randomNumArray = (min, max, index) => {
  const answer = new Array();
  while (answer.length < index) {
    const randomInt = Math.floor(Math.random() * (max - min)) + min;
    if (!answer.includes(randomInt)) {
      answer.push(randomInt);
    }
  }
  return answer;
};

const Banner = () => {
  const { data, isLoading, isError, error } = useMoviesQuery(1022789);
  // console.table("data:", data);

  console.log(randomNumArray(0, 19, 5));

  if (isLoading) {
    return <Skeleton className="global-px h-[56dvh]" />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
      }}
      className="global-px relative h-[56dvh] bg-cover bg-center bg-no-repeat pb-16 before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:to-60%"
    >
      <div className="relative flex h-full flex-col justify-end space-y-6 text-gray-200 md:w-2/5">
        <h1 className="text-5xl font-semibold">{data?.title}</h1>
        <p className="hidden text-xl sm:block">{data?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
