const TaskBar = () => {
  return (
    <div className="bg-white shadow-lg rounded flex justify-between px-2 py-2 justify-center ">
      <div className="left">
        <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          Button 1
        </button>
      </div>
      <div className="right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default TaskBar;