import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div>
      <TaskForm addTask={addTask} />
      <div className="col-8">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
          <li>
            <button>Pending</button>
          </li>
          <li>
            <button>Archive</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
