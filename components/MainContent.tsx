import TaskBar from "./TaskBar";
const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-100 p-4">
      <div className="h-full flex flex-col">
        <div className="flex-1 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">Text</h2>
        </div>
        <hr />
          <TaskBar />
      </div>
    </div>
  );
};

export default MainContent;
