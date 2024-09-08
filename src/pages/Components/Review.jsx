/* eslint-disable react/prop-types */
import ErrorCard from "@/pages/Components/ErrorCard";
import ReviewCard from "@/pages/Components/ReviewCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useReviewQuery } from "@/hooks/useReviewQuery";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";

const Review = ({ id }) => {
  // const languageCode = useSelector((state) => state.code.code);
  const { data, isLoading, isError, error } = useReviewQuery(id, "en-US");
  // if (languageCode.slice(0, 2) != "en") {
  //   const { data: englishReview } = useReviewQuery(id, "en-US");
  //   console.log(englishReview);
  // }

  const { t } = useTranslation();

  // console.log(data);

  if (isLoading) {
    return <Skeleton className="size-full" />;
  }
  if (isError) {
    return <ErrorCard error={error} />;
  }
  if (data.results.length === 0) {
    return (
      <div className="mb-auto mt-10 max-w-4xl text-center text-3xl font-bold md:text-5xl">
        {t("NoReviews")}
      </div>
    );
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
