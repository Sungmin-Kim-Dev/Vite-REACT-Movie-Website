/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const ReviewCard = ({ review }) => {
  const languageCode = useSelector((state) => state.code.code);
  const [viewMore, setViewMore] = useState(false);
  const [isOverflow, setIsOverflow] = useState(true);
  const contentRef = useRef();
  useEffect(() => {
    const overflow =
      contentRef.current.scrollHeight > contentRef.current.clientHeight;
    console.log("overflow: ", overflow);

    setIsOverflow(overflow);
  }, []);

  const { t } = useTranslation();
  const date = new Date(review?.created_at.slice(0, 10)).toLocaleDateString(
    languageCode,
  );

  return (
    <div className="max-w-4xl rounded-xl border border-slate-50/50 bg-neutral-800/40 p-8">
      <div className="review-title flex items-end justify-between border-b pb-3">
        <h3 className="text-2xl font-bold">A review by {review?.author}</h3>
        <span>{date}</span>
      </div>
      <div
        className={`mt-5 text-lg ${!viewMore ? "line-clamp-4" : ""}`}
        ref={contentRef}
      >
        {review?.content}
      </div>
      {!isOverflow ? (
        ""
      ) : viewMore ? (
        <button
          className="flex items-center gap-2 text-lg font-semibold text-lime-200"
          onClick={() => setViewMore(!viewMore)}
        >
          {t(`Fold`)} <FaAngleUp />
        </button>
      ) : (
        <button
          className="flex items-center gap-2 text-lg font-semibold text-yellow-200"
          onClick={() => setViewMore(!viewMore)}
        >
          {t(`ViewMore`)} <FaAngleDown />
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
