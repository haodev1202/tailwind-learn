function Profile() {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-2xl bg-white p-12">
      <div className="h-28 w-28 overflow-hidden rounded-full border-[11px] border-[#E6EFFA]">
        <img
          src="./src/assets/1.png"
          alt="avatar"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-6 flex-1 space-y-8 font-poppins text-base font-normal text-[#1C2B62]">
        <div>
          <h1 className="font-merri text-[1.625rem] font-bold">David Grant</h1>
          <h2 className="mt-1">3D Artist</h2>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="size-6"
            >
              <g clipPath="url(#clip0_2_11)">
                <path
                  d="M16 23.6667L7.77067 27.9933L9.34267 18.8293L2.676 12.34L11.876 11.0067L15.9907 2.66933L20.1053 11.0067L29.3053 12.34L22.6387 18.8293L24.2107 27.9933L16 23.6667Z"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_11">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            4.7 Rating
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="size-6"
            >
              <g clipPath="url(#clip0_2_33)">
                <path
                  d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0026 20.0044L20.5359 27.8564L22.6667 23.547L27.4641 23.8564L22.9308 16.0044"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.06923 16.0044L4.5359 23.8564L9.33333 23.547L11.4641 27.8564L15.9974 20.0044"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_33">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            4,447 Reviews
          </p>
          <p className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="size-6"
            >
              <g clipPath="url(#clip0_2_28)">
                <path
                  d="M16 14.6667C18.9455 14.6667 21.3333 12.2789 21.3333 9.33333C21.3333 6.38781 18.9455 4 16 4C13.0545 4 10.6667 6.38781 10.6667 9.33333C10.6667 12.2789 13.0545 14.6667 16 14.6667Z"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 28V25.3333C8 23.9188 8.5619 22.5623 9.5621 21.5621C10.5623 20.5619 11.9188 20 13.3333 20H18.6667C20.0812 20 21.4377 20.5619 22.4379 21.5621C23.4381 22.5623 24 23.9188 24 25.3333V28"
                  stroke="#1C2B62"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_28">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            478 Students
          </p>
        </div>

        <p>
          David Grant has been making video games for a living for more than 14
          years as a Designer, Producer, Creative Director, and Executive
          Producer, creating games for console, mobile, PC and Facebook.
        </p>

        <button className="rounded border-[2px] border-[#C4CADF] p-[0.625rem]">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Profile;
