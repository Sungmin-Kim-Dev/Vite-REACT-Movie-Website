/* eslint-disable react/prop-types */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMoviesQuery } from "@/hooks/useMoviesQuery";
import ErrorCard from "@/layout/components/ErrorCard";
import LoadingCard from "@/layout/components/LoadingCard";
import MovieCard from "./MovieCard";

const MovieSlide = ({ category, slideName }) => {
  const { data, isLoading, isError, error } = useMoviesQuery(category);

  if (isLoading) {
    return <LoadingCard />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  return (
    <div className="global-px">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: "auto",
          loop: false,
        }}
        className="my-8"
      >
        <h3 className="text-2xl font-bold">{slideName}</h3>
        <CarouselContent className="my-5 -ml-5">
          {data.results.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-5 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
            >
              <MovieCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieSlide;
