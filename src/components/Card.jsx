import React from "react";

const Card = ({ issue }) => {
  return (
    <div className="shadow-md rounded-md cursor-pointer bg-slate-100 p-3">
      <div>
        <img
          className="w-20 rounded-full"
          src={issue.userImg}
          alt={issue.requestedBy}
        />
        <h2 className="text-lg font-semibold">{issue.requestedBy}</h2>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">{issue.subject}</h2>
        <div className="space-x-2">
          <span
            className={`font-semibold py-1 px-2 ${
              issue.priority == "High"
                ? "bg-red-200 text-red-600 rounded-full"
                : issue.priority == "Medium"
                ? "bg-yellow-200 text-yellow-600 rounded-full"
                : "bg-green-200 text-green-600 rounded-full"
            }`}
          >
            {issue.priority}
          </span>
          <span
            className={`font-semibold py-1 px-2 ${
              issue.status == "Pending"
                ? "bg-red-200 text-red-600 rounded-full"
                : issue.status == "Reviewed"
                ? "bg-yellow-200 text-yellow-600 rounded-full"
                : "bg-green-200 text-green-600 rounded-full"
            }`}
          >
            {issue.status}
          </span>
        </div>
      </div>
      <h2 className="font-semibold text-slate-700">{issue.description}</h2>
    </div>
  );
};

export default Card;
