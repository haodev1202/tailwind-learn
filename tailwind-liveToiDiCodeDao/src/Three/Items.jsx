import React from "react";

const Items = ({ listImg, title, quantityImg }) => {
  console.log(listImg);

  return (
    <div className="flex flex-col gap-y-6 rounded-[2rem] bg-white p-6">
      <div className="grid grid-cols-3 gap-4">
        {listImg.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`${index === 0 ? "col-start-1 col-end-4 aspect-video" : "aspect-square"} w-full rounded-3xl object-cover`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between font-medium">
        <h1 className="text-2xl">People</h1>
        <span className="flex flex-row items-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <g clipPath="url(#clip0_2_22)">
              <path
                d="M19.375 10.8333H19.3871"
                stroke="#2C3E50"
                strokeWidth="1.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9583 5.66675H9.04167C6.90157 5.66675 5.16667 7.40164 5.16667 9.54175V22.4584C5.16667 24.5985 6.90157 26.3334 9.04167 26.3334H21.9583C24.0984 26.3334 25.8333 24.5985 25.8333 22.4584V9.54175C25.8333 7.40164 24.0984 5.66675 21.9583 5.66675Z"
                stroke="#2C3E50"
                strokeWidth="1.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.16667 19.8751L10.3333 14.7084C10.9224 14.1416 11.5906 13.8431 12.2708 13.8431C12.951 13.8431 13.6193 14.1416 14.2083 14.7084L20.6667 21.1667"
                stroke="#2C3E50"
                strokeWidth="1.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0833 18.5833L19.375 17.2916C19.9641 16.7248 20.6323 16.4264 21.3125 16.4264C21.9927 16.4264 22.6609 16.7248 23.25 17.2916L25.8333 19.875"
                stroke="#2C3E50"
                strokeWidth="1.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_22">
                <rect
                  width="31"
                  height="31"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          144
        </span>
      </div>
    </div>
  );
};

export default Items;
