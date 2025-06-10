import React from "react";
import TaskCard from "./TaskCard";

function App() {
  const pendingTasks = [
    {
      title: "Build the website with static content",
      dueDate: "10th April",
      assigneeName: "Rohit S",
    },
    {
      title: "Add a blog",
      dueDate: "22nd March",
      assigneeName: "Rohit M",
    },
  ];

  const completedTasks = [
    {
      title: "Design the mockup",
      completedAtDate: "10th April",
      assigneeName: "Rohit M",
    },
    {
      title: "Get the approval from principal",
      completedAtDate: "20th April",
      assigneeName: "Ajay S",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Smarter Tasks</h1>
          <p className="text-gray-600">
            <strong>Project:</strong> Graduation Final Year Project (Revamp College Website)
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pending Tasks */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Pending</h2>
            <div className="space-y-4">
              {pendingTasks.map((task, index) => (
                <TaskCard
                  key={index}
                  title={task.title}
                  dueDate={task.dueDate}
                  assigneeName={task.assigneeName}
                  isDone={false}
                />
              ))}
              <div className="p-4 bg-gray-200 text-gray-500 rounded cursor-pointer">
                + New task
              </div>
            </div>
          </div>

          {/* Completed Tasks */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Done</h2>
            <div className="space-y-4">
              {completedTasks.map((task, index) => (
                <TaskCard
                  key={index}
                  title={task.title}
                  completedAtDate={task.completedAtDate}
                  assigneeName={task.assigneeName}
                  isDone={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
