import React from "react";

const Badge = ({ complete }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        complete
          ? "bg-green-100 text-green-700 ring-1 ring-green-300"
          : "bg-red-100 text-red-700 ring-1 ring-red-300"
      }`}
    >
      {complete ? "✅ 완료" : "⏳ 미완료"}
    </span>
  );
};

export default Badge;
