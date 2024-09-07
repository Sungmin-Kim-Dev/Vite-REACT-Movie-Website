/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="max-w-4xl rounded-xl border border-slate-50/50 bg-neutral-800/40 p-8">
      <div className="review-title flex items-end justify-between border-b pb-3">
        <h3 className="text-2xl font-bold">A review by {review?.author}</h3>
        <span>{review?.created_at.slice(0, 10)}</span>
      </div>
      <div className="mt-5 text-lg">{review?.content}</div>
      <button
        className="flex items-center gap-2 text-lg font-semibold text-yellow-200"
        onClick={setViewMore(!viewMore)}
      >
        View More <FaAngleDown />
        {/* View Less <FaAngleUp /> */}
      </button>
    </div>
  );
};

export default ReviewCard;
