import ErrorCard from "@/components/common/ErrorCard";
import SlideSkeleton from "@/components/common/SlideSkeleton";
import { useMoviesQuery } from "@/hooks/useMoviesQuery";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieSlide from "@/components/common/MovieSlide";
import { tabList } from "./Constants/globalConst";
import { useState } from "react";
import Review from "./Components/Review";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import YouTube from "react-youtube";
import { useAPIQuery } from "@/hooks/useAPIQuery";

const MovieDetailPage = () => {
  const languageCode = useSelector((state) => state.code.code);
  const { id } = useParams();
  // console.log(id);
  const { data, isLoading, isError, error } = useMoviesQuery(id, languageCode);
  const { data: trailerInfo } = useAPIQuery(`movie/${id}/videos`, languageCode);

  const collectionData = data?.belongs_to_collection;
  // console.log(collectionData);

  const [selectedTab, setSelectedTab] = useState("RECOMMENDATIONS");
  const selectTab = (tabName) => {
    setSelectedTab(tabName);
  };
  if (isLoading) {
    return <SlideSkeleton />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  return (
    <div className="global-px pb-10">
      <div className="my-10 flex max-w-screen-2xl flex-col-reverse gap-14 gap-y-6 md:flex-row">
        <div className="movie-detail-text flex-1">
          <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl">
            {data?.title}
          </h1>
          <h3 className="mt-2 text-lg">{data.tagline}</h3>
          <div className="mt-5 flex gap-x-5">
            <span>{data?.release_date}</span>
            <span>{data?.runtime}m</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {data?.genres?.map(({ name }, index) => (
              <span
                key={index}
                className="rounded-xl bg-sky-800 px-3 py-1 text-base"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="my-10 flex gap-x-5">
            {trailerInfo?.results[0] ? (
              <Popover>
                <PopoverTrigger>
                  <div className="flex gap-x-3 rounded-lg bg-slate-600 px-4 py-3 hover:bg-slate-400">
                    <FaPlay /> TRAILER
                  </div>
                  <PopoverContent className="global-mx w-auto bg-slate-300">
                    <YouTube videoId={trailerInfo?.results[0].key} />
                  </PopoverContent>
                </PopoverTrigger>
              </Popover>
            ) : (
              ""
            )}
            {/* <Button className="bg-slate-300">+</Button> */}
          </div>
          <p className="text-lg md:text-xl">{data?.overview}</p>
        </div>
        <div className="movie-detail-poster flex-1">
          <img
            src={`https://image.tmdb.org/t/p/w780${data?.poster_path}`}
            alt=""
          />
        </div>
      </div>
      <div className="movie-detail-bottom-box">
        <div className="detail-tab-button flex flex-wrap border-b text-lg md:text-2xl">
          {tabList.map((item) => (
            <button
              key={item}
              className={`px-6 py-3 ${selectedTab === item ? "" : "text-zinc-400"} ${!collectionData && item === "COLLECTION" ? "hidden" : ""} last:hidden`}
              onClick={() => selectTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {selectedTab === "RECOMMENDATIONS" ? (
        <div className="-global-mx py-4">
          <MovieSlide address={`movie/${id}/recommendations`} slideName="" />
        </div>
      ) : selectedTab === "COLLECTION" ? (
        <div className="mt-10">
          <div className="max-w-md">
            <img
              src={`https://image.tmdb.org/t/p/w500${collectionData?.backdrop_path ? collectionData.backdrop_path : collectionData?.poster_path}`}
              alt={collectionData?.name}
              className="w-full rounded-2xl"
            />
          </div>
          <p className="mt-2 text-base md:text-lg">{collectionData?.name}</p>
        </div>
      ) : selectedTab === "REVIEW" ? (
        <Review id={id} />
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieDetailPage;
