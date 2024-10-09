import React, { useState } from "react";

const Review = () => {
  const [reviewScore, setReviewScore] = useState(0);
  return (
    <div className="flex flex-row gap-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          className="rounded-md border-[3px] border-[#EEF2FF] p-2"
          key={star}
          onClick={() => setReviewScore(star)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
          >
            <g clipPath="url(#clip0_4_28)">
              <path
                d="M18.5 27.3646L8.98482 32.3673L10.8024 21.7714L3.09412 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.1759 21.7714L27.9936 32.3673L18.5 27.3646Z"
                fill={star <= reviewScore ? "#FFEC8A" : ""}
                stroke={star <= reviewScore ? "#FFB444" : "#AEB3C5"}
                strokeWidth="2.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_28">
                <rect width="37" height="37" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      ))}
    </div>
  );
};

export default Review;
