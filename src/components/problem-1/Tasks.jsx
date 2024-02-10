import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  //Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Fetch data from localstorage
  useEffect(() => {
    const storedtasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(storedtasks);
    setTasks(storedtasks);
  }, []);

  // Set New tasks to Previous Task List
  const addTask = (newtask) => {
    setTasks([...tasks, newtask]);
  };

  // Function to filter Tasks
  const filtertasks = () => {
    switch (filter) {
      case "complete":
        return tasks.filter((task) => task.status === "complete");
      case "active":
        return tasks.filter((task) => task.status === "active");
      case "pending":
        return tasks.filter((task) => task.status === "pending");
      case "archive":
        return tasks.filter((task) => task.status === "archive");
      default:
        return tasks;
    }
  };
  return (
    <div>
      <TaskForm addTask={addTask} />
      <div className="col-8">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li>
            <button
              onClick={() => setFilter("all")}
              className={`nav-link ${(filter === "all") & "active"}`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("active")}
              className={`nav-link ${(filter === "active") & "active"}`}
            >
              Active
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("complete")}
              className={`nav-link ${(filter === "complete") & "active"}`}
            >
              Completed
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("pending")}
              className={`nav-link ${(filter === "pending") & "active"}`}
            >
              Pending
            </button>
          </li>
          <li>
            <button
              onClick={() => setFilter("archive")}
              className={`nav-link ${(filter === "archive") & "active"}`}
            >
              Archive
            </button>
          </li>
        </ul>
      </div>
      <TaskList tasks={filtertasks()} />
    </div>
  );
};

export default Tasks;
