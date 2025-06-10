import React from "react";
import "./TaskCard.css"; // Optional, for extra styling if needed

function TaskCard({ title, dueDate, completedAtDate, assigneeName, isDone }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      {isDone ? (
        <p className="text-sm text-gray-600">Completed on: {completedAtDate}</p>
      ) : (
        <p className="text-sm text-gray-600">Due on: {dueDate}</p>
      )}
      <p className="text-sm text-gray-600">Assignee: {assigneeName}</p>
    </div>
  );
}

export default TaskCard;
