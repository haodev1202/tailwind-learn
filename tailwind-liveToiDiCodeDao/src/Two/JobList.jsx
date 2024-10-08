import Job from "./Job";

const jobs = [
  {
    title: "Furniture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_24)">
          <path
            d="M5.33333 14.6667C6.04058 14.6667 6.71885 14.9476 7.21895 15.4477C7.71905 15.9478 8 16.6261 8 17.3333V18.6667H24V17.3333C24 16.6261 24.281 15.9478 24.781 15.4477C25.2811 14.9476 25.9594 14.6667 26.6667 14.6667C27.3739 14.6667 28.0522 14.9476 28.5523 15.4477C29.0524 15.9478 29.3333 16.6261 29.3333 17.3333V24C29.3333 24.3536 29.1929 24.6928 28.9428 24.9428C28.6928 25.1929 28.3536 25.3333 28 25.3333H4C3.64638 25.3333 3.30724 25.1929 3.05719 24.9428C2.80714 24.6928 2.66667 24.3536 2.66667 24V17.3333C2.66667 16.6261 2.94762 15.9478 3.44771 15.4477C3.94781 14.9476 4.62609 14.6667 5.33333 14.6667V14.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33333 14.6667V10.6667C5.33333 9.60581 5.75476 8.58839 6.50491 7.83824C7.25505 7.0881 8.27247 6.66667 9.33333 6.66667H22.6667C23.7275 6.66667 24.7449 7.0881 25.4951 7.83824C26.2452 8.58839 26.6667 9.60581 26.6667 10.6667V14.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66667V18.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_24">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#FFECEC]",
  },

  {
    title: "Property",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_81)">
          <path
            d="M6.66667 16H4L16 4L28 16H25.3333"
            stroke="#281A51"
            strokeWidth="2"
            strokLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66667 16V25.3333C6.66667 26.0406 6.94762 26.7189 7.44772 27.219C7.94782 27.719 8.62609 28 9.33334 28H22.6667C23.3739 28 24.0522 27.719 24.5523 27.219C25.0524 26.7189 25.3333 26.0406 25.3333 25.3333V16"
            stroke="#281A51"
            strokeWidth="2"
            strokLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6667 16H13.3333V21.3333H18.6667V16Z"
            stroke="#281A51"
            strokeWidth="2"
            strokLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_81">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#F7ECFF]",
  },

  {
    title: "Job",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_86)">
          <path
            d="M4 28H28"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.6667H13.3333"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16H13.3333"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 21.3333H13.3333"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6667 10.6667H20"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6667 16H20"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6667 21.3333H20"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66666 28V6.66667C6.66666 5.95942 6.94761 5.28115 7.4477 4.78105C7.9478 4.28095 8.62608 4 9.33332 4H22.6667C23.3739 4 24.0522 4.28095 24.5523 4.78105C25.0524 5.28115 25.3333 5.95942 25.3333 6.66667V28"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_86">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#ECF0FF]",
  },

  {
    title: "Travel",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_96)">
          <path
            d="M21.3333 13.3333H26.6667C27.3739 13.3333 28.0522 13.6143 28.5523 14.1144C29.0524 14.6145 29.3333 15.2928 29.3333 16C29.3333 16.7072 29.0524 17.3855 28.5523 17.8856C28.0522 18.3857 27.3739 18.6667 26.6667 18.6667H21.3333L16 28H12L14.6667 18.6667H9.33332L6.66666 21.3333H2.66666L5.33332 16L2.66666 10.6667H6.66666L9.33332 13.3333H14.6667L12 4H16L21.3333 13.3333Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_96">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#D7F9F3]",
  },

  {
    title: "Boat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_99)">
          <path
            d="M4 22.6667H21.8667C22.5265 22.6669 23.1762 22.5039 23.7578 22.1922C24.3394 21.8804 24.8349 21.4296 25.2 20.88L29.3333 14.6667H21.0267C20.3458 14.6676 19.6715 14.7988 19.04 15.0533L14.2933 16.9467C13.6619 17.2012 12.9875 17.3324 12.3067 17.3333H7.33333H6L4 22.6667V22.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 17.3333L10 10.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10.6667H18.6667L21.3333 14.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_99">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#E2FFD4]",
  },

  {
    title: "MC",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_104)">
          <path
            d="M6.66667 25.3333C8.87581 25.3333 10.6667 23.5425 10.6667 21.3333C10.6667 19.1242 8.87581 17.3333 6.66667 17.3333C4.45753 17.3333 2.66667 19.1242 2.66667 21.3333C2.66667 23.5425 4.45753 25.3333 6.66667 25.3333Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.3333 25.3333C27.5425 25.3333 29.3333 23.5425 29.3333 21.3333C29.3333 19.1242 27.5425 17.3333 25.3333 17.3333C23.1242 17.3333 21.3333 19.1242 21.3333 21.3333C21.3333 23.5425 23.1242 25.3333 25.3333 25.3333Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 18.6667L15.3333 13.3333M10 18.6667H16.6667L22 13.3333H8L10 18.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.3333 8H20L22 12L24.6667 17.3333"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_104">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#FFF]",
  },

  {
    title: "Economy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_110)">
          <path
            d="M25.3333 12H12C10.5273 12 9.33334 13.1939 9.33334 14.6667V22.6667C9.33334 24.1394 10.5273 25.3333 12 25.3333H25.3333C26.8061 25.3333 28 24.1394 28 22.6667V14.6667C28 13.1939 26.8061 12 25.3333 12Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6667 21.3333C20.1394 21.3333 21.3333 20.1394 21.3333 18.6667C21.3333 17.1939 20.1394 16 18.6667 16C17.1939 16 16 17.1939 16 18.6667C16 20.1394 17.1939 21.3333 18.6667 21.3333Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.6667 12V9.33332C22.6667 8.62608 22.3857 7.9478 21.8856 7.4477C21.3855 6.94761 20.7072 6.66666 20 6.66666H6.66667C5.95942 6.66666 5.28115 6.94761 4.78105 7.4477C4.28095 7.9478 4 8.62608 4 9.33332V17.3333C4 18.0406 4.28095 18.7188 4.78105 19.2189C5.28115 19.719 5.95942 20 6.66667 20H9.33333"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_110">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#FFF3C9]",
  },

  {
    title: "Holiday",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clipPath="url(#clip0_2_75)">
          <path
            d="M5.33332 14.6667C6.04057 14.6667 6.71884 14.9476 7.21894 15.4477C7.71904 15.9478 7.99999 16.6261 7.99999 17.3333V18.6667H24V17.3333C24 16.6261 24.2809 15.9478 24.781 15.4477C25.2811 14.9476 25.9594 14.6667 26.6667 14.6667C27.3739 14.6667 28.0522 14.9476 28.5523 15.4477C29.0524 15.9478 29.3333 16.6261 29.3333 17.3333V24C29.3333 24.3536 29.1928 24.6928 28.9428 24.9428C28.6928 25.1928 28.3536 25.3333 28 25.3333H3.99999C3.64637 25.3333 3.30723 25.1928 3.05718 24.9428C2.80713 24.6928 2.66666 24.3536 2.66666 24V17.3333C2.66666 16.6261 2.94761 15.9478 3.4477 15.4477C3.9478 14.9476 4.62608 14.6667 5.33332 14.6667V14.6667Z"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33334 14.6667V10.6667C5.33334 9.60579 5.75477 8.58838 6.50492 7.83823C7.25506 7.08808 8.27248 6.66666 9.33334 6.66666H22.6667C23.7275 6.66666 24.745 7.08808 25.4951 7.83823C26.2453 8.58838 26.6667 9.60579 26.6667 10.6667V14.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6.66666V18.6667"
            stroke="#281A51"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_75">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    bgColor: "bg-[#FFD9C9]",
  },
];

const JobList = () => {
  return (
    <div className="fontPoppins flex w-[40rem] flex-col gap-y-8 rounded-3xl bg-white p-[4.5rem] text-base font-normal text-[#281A51]">
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a part-time job"
            className="min-w-[21.75rem] rounded border-[1px] border-[#DBD5EC] p-4 pl-11 text-[#281A518A] outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="absolute bottom-4 left-4 right-[0.63rem] top-[1.1rem] h-[1.375rem] w-[1.375rem]"
          >
            <g opacity="0.54" clipPath="url(#clip0_2_7)">
              <path
                d="M9.16667 15.5833C12.7105 15.5833 15.5833 12.7105 15.5833 9.16667C15.5833 5.62284 12.7105 2.75 9.16667 2.75C5.62284 2.75 2.75 5.62284 2.75 9.16667C2.75 12.7105 5.62284 15.5833 9.16667 15.5833Z"
                stroke="#281A51"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 19.25L13.75 13.75"
                stroke="#281A51"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_7">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <button className="ml-[0.75rem] flex flex-1 items-center rounded bg-[#281A51] p-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="mr-[0.63rem] h-[1.375rem] w-[1.375rem]"
          >
            <g clipPath="url(#clip0_2_18)">
              <path
                d="M2.75 6.41666L8.25 3.66666L13.75 6.41666L19.25 3.66666V15.5833L13.75 18.3333L8.25 15.5833L2.75 18.3333V6.41666Z"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 3.66666V15.5833"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.75 6.41666V18.3333"
                stroke="white"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_18">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Use map
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {jobs.map((job) => (
          <Job
            key={job.title}
            title={job.title}
            icon={job.icon}
            bgColor={job.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
