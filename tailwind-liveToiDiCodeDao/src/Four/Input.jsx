import React from "react";

const Input = ({ title, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={title} className="text-sm font-semibold">
        {title}
      </label>
      {type === "text" && (
        <input
          type="text"
          id={title}
          placeholder={placeholder}
          className="border-[var(--eef-2-ff, #EEF2FF)] rounded-md border-[2px] p-4"
        />
      )}

      {type === "textarea" && (
        <textarea
          type="text"
          id={title}
          placeholder={placeholder}
          className="border-[var(--eef-2-ff, #EEF2FF)] rounded-md border-[2px] p-4"
        />
      )}
    </div>
  );
};

export default Input;
