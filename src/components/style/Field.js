import React from "react";

const Field = ({ label, value }) => {
  return (
    <div className="grid grid-cols-12 items-center gap-2">
      <div className="col-span-3 text-sm font-semibold text-gray-600 text-right">
        {label}
      </div>
      <div className="col-span-9">
        <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 shadow-sm">
          {value}
        </div>
      </div>
    </div>
  );
};

export default Field;
