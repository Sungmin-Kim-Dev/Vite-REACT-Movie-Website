/* eslint-disable react/prop-types */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useAPIQuery } from "@/hooks/useAPIQuery";
import ErrorCard from "@/components/common/ErrorCard";
import MovieCard from "./MovieCard";
import SlideSkeleton from "./SlideSkeleton";
import { useLocalStorage } from "@uidotdev/usehooks";

const MovieSlide = ({ address, slideName }) => {
  const [languageCode] = useLocalStorage("languageCode", "en-US");

  const { data, isLoading, isError, error } = useAPIQuery(
    address,
    languageCode,
  );

  if (isLoading) {
    return <SlideSkeleton />;
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
        <CarouselContent className="-ml-5 2xl:-ml-8">
          {data?.results.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-5 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5 2xl:pl-8"
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
