const Job = ({ title, icon, bgColor }) => {
  let isBgWhite =
    bgColor.toLowerCase() === "bg-white" ||
    bgColor.toLowerCase() === "bg-[#fff]";
  return (
    <div
      className={`${isBgWhite ? "border-[1px] border-[#DBD5EC]" : ""} flex aspect-square flex-col items-center justify-center gap-y-1 rounded-lg ${bgColor} p-6`}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Job;
