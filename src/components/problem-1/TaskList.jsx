const TaskList = ({ tasks }) => {
  return (
    <>
      <div className="tab-content"></div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        {tasks.map((task, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{task.name}</td>
                <td>{task.status}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default TaskList;
