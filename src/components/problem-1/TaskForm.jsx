import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      return;
    }

    // Add New Task
    const newTask = {
      id: uuidv4(),
      name: taskName,
      status: taskStatus,
    };

    // Add the new tasks to the task list
    addTask(newTask);

    setTaskName("");
    setTaskStatus("");
  };

  // Name Input Handler Function
  const handleNameOnChange = (e) => {
    console.log(e.target.value);
    setTaskName(e.target.value.toUpperCase());
  };

  // Status Input Handler Functions
  const handleStatusOnChange = (e) => {
    console.log(e.target.value);
    setTaskStatus(e.target.value.toLowerCase());
  };

  return (
    <div className="row justify-content-center mt-5">
      <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
      <div className="col-6">
        <form
          className="row gy-2 gx-3 align-items-center mb-4"
          onSubmit={handleSubmit}
        >
          <div className="col-auto">
            <input
              className="form-control"
              type="text"
              name="name"
              value={taskName}
              onChange={handleNameOnChange}
            />
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="text"
              name="status"
              value={taskStatus}
              onChange={handleStatusOnChange}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
