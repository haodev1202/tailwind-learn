import React, { useState } from "react";
import User from "./User";

const navs = ["Reputation", "New users", "Voters", "Editors", "Moderators"];
const users = [
  {
    name: "Lelah Nichols",
    job: "Troy, MI",
    avatar: "./src/assets/ava1.png",
    tags: ["clothes", "stem"],
  },
  {
    name: "Jesus Weiss",
    job: "Fort Worth, TX",
    avatar: "./src/assets/ava2.png",
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    job: "Austin, TX",
    avatar: "./src/assets/ava3.png",
    tags: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    job: "Cincinnati, OH",
    avatar: "./src/assets/ava4.png",
    tags: ["Maintenance", "gears", "frames", "repair"],
  },
  {
    name: "Amy Campbell",
    job: "Warrior, AL",
    avatar: "./src/assets/ava5.png",
    tags: ["music", "disks"],
  },
  {
    name: "Anthony S. Morin",
    job: "Lyndhurst, NJ",
    avatar: "./src/assets/ava6.png",
    tags: ["vintage", "electric"],
  },
];
const UsersList = () => {
  const [active, setActive] = useState("New users");
  return (
    <div className="w-[76rem] space-y-[4.38rem] rounded-2xl bg-white p-[6.25rem] font-poppins text-base text-[#151B32]">
      <div className="space-y-6">
        <h1 className="font-merri text-[2rem] font-black">Users</h1>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="border-[var(--bfc-8-e-6, #BFC8E5)] flex min-w-[20.4375rem] flex-row items-center gap-x-2 border-[1px] p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_2_6)">
                <path
                  d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
                  stroke="#151B32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 28L20 20"
                  stroke="#151B32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_6">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              className="grow outline-none"
              placeholder="Search users"
            />
          </div>
          <ul className="flex flex-row">
            {navs.map((nav) => (
              <li
                onClick={() => setActive(nav)}
                className={`flex items-center justify-center rounded-lg ${active === nav ? "bg-[#849FFF] text-white" : ""} p-4`}
              >
                {nav}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {users.map((user) => (
          <User
            key={user.name}
            name={user.name}
            job={user.job}
            avatar={user.avatar}
            tags={user.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
