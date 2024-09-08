/* eslint-disable react/prop-types */
import ErrorCard from "@/pages/Components/ErrorCard";
import ReviewCard from "@/pages/Components/ReviewCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useReviewQuery } from "@/hooks/useReviewQuery";
// import { useSelector } from "react-redux";

const Review = ({ id }) => {
  // const languageCode = useSelector((state) => state.code.code);
  const { data, isLoading, isError, error } = useReviewQuery(id, "en-US");
  // if (languageCode.slice(0, 2) != "en") {
  //   const { data: englishReview } = useReviewQuery(id, "en-US");
  //   console.log(englishReview);
  // }

  // console.log(data);

  if (isLoading) {
    return <Skeleton className="size-full" />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }

  return (
    <div className="mt-10 flex flex-col gap-4">
      {data?.results.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
};

export default Review;
