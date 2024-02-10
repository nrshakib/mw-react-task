import { useState } from "react";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameOnChange = (e) => {
    console.log(e.target.value);
    setTaskName(e.target.value);
  };
  const handleStatusOnChange = (e) => {
    console.log(e.target.value);
    setTaskStatus(e.target.value);
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
              onChange={handleNameOnChange}
            />
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              type="text"
              name="status"
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
