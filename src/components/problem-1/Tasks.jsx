import TaskForm from "./TaskForm";

const Tasks = () => {
  return (
    <div>
      <TaskForm />
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
