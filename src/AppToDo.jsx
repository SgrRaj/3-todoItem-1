function AppToDo() {
  return (
    <div className="container">
      <div className="row todoitem-container">
        <div className="col-6">
          <input type="text" placeholder="Enter To Do"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>{" "}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppToDo;
