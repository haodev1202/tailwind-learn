const UserProfile = () => {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-lg bg-white p-12 font-poppins text-base font-normal">
      <img
        src="https://s3-alpha-sig.figma.com/img/eede/0e07/7531e666158a2ffea80f0c6acf2f664a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-UasIyGaoj4Drn6wW1~2ueIsbrWdhUXKFSsJu-b~vnTuaqLJqYOTof7g9H770YuHMhBbEisORPc0gRy2nhmlkf~5aGWFoBblU0fZS48OIjo1GuKXsiMQMMexpyUYGNb-J0hZTMWA9c5XXryy1HLVL1xyMwYDB3ChOjl7vBO4X9N21R1iebQrlsBytjFzqpGV5mL7m8ARCJ5ZNYTBt-lqTqMsjRyNtNPyepXXwteZL-gfnzmYd~5OWyAZdDuyTxqsTwd9iLJvhOJOCxiBK0E63uMUJYMIKjrlgsMic20UArd0UKk6JJ7qFBBNmDn3HXVU0O828V4qiEpVK7JYLtbtQ__"
        alt="avatar"
        className="w-32 self-start rounded-full border-[11px] border-[#E6EFFA]"
      />
      <div className="space-y-8 text-[#1C2B62]">
        <div>
          <h1 className="font-merri text-3xl font-bold">David Grant</h1>
          <h2 className="mt-1">3D Artist</h2>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-1 inline-block size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            4.7 Rating
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mr-1 inline-block size-8"
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
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mr-1 inline-block size-8"
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

        <p className="text-lg">
          David Grant has been making video games for a living for more than 14
          years as a Designer, Producer, Creative Director, and Executive
          Producer, creating games for console, mobile, PC and Facebook.
        </p>

        <button className="rounded-[0.25rem] border-2 border-[#C4CADF] p-[0.63rem]">
          Show more
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
