import React from "react";

const User = ({ name, job, avatar, tags }) => {
  return (
    <div className="flex h-[13rem] flex-row gap-x-4 bg-[#FBFCFF] p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow hover:rounded-2xl">
      <div className="h-[6.0625rem] min-w-[6.0625rem]">
        <img
          src={avatar}
          alt=""
          className="h-full w-[6.0625rem] rounded-full object-cover"
        />
      </div>
      <div className="space-y-4">
        <div className="mt-5">
          <h1 className="font-merri text-[1.125rem] font-black">{name}</h1>
          <h2 className="font-poppins text-[0.875rem] font-normal">{job}</h2>
        </div>
        <ul className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border-[var(--bfc-8-e-6, #BFC8E5)] rounded-[0.625rem] border-[1px] px-2 py-[0.13rem] font-poppins text-[0.75rem] font-normal text-[#516FD4]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
