const TaskBar = () => {
  return (
    <div className="bg-white shadow-lg rounded flex justify-between px-2 py-2  ">
            <div className="left">
        <button className="mb-4 bg-yellow-500 text-white px-4 py-2 rounded mx-2">
          New
        </button>
        <button className="mb-4 bg-gray-500 text-white px-4 py-2 rounded mx-2" disabled>
          Contacted
        </button>
        <button className="mb-4 bg-gray-500 text-white px-4 py-2 rounded mx-2" disabled>
          Nurturing
        </button>
        <button className="mb-4 bg-gray-500 text-white px-4 py-2 rounded mx-2" disabled>
          Qualified
        </button>
        <button className="mb-4 bg-gray-500 text-white px-4 py-2 rounded" disabled>
          Unqualified
        </button>
      </div>
      <div className="right">
        <button className="bg-blue-800 text-white px-4 py-2 rounded">
          Mark as Converted
        </button>
      </div>
    </div>
  );
};

export default TaskBar;