import { MdDashboard } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import { FcAndroidOs } from "react-icons/fc";
import { BsFillSunFill } from "react-icons/bs";
import { ImArrowDownLeft2 } from "react-icons/im";

export default function SideBar() {
  return (
    <div className="flex flex-col w-fit p-4 bg-gray-800 text-white h-full space-y-4">
      <div className="flex items-center space-x-2">
        <MdDashboard className="text-2xl" />
      </div>
      <div className="flex items-center space-x-2">
        <IoBagRemove className="text-2xl" />
      </div>
      <div className="flex items-center space-x-2">
        <FcAndroidOs className="text-2xl" />
      </div>
      <div className="flex items-center space-x-2">
        <BsFillSunFill className="text-2xl" />
      </div>
      <div className="flex items-center space-x-2">
        <ImArrowDownLeft2 className="text-2xl" />
      </div>
    </div>
  );
}