import { useEffect, useState } from "react";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaSquareRootAltSolid } from "react-icons/lia";
function App() {
  return (
    <div className=" h-screen w-full bg-gray-400  flex justify-center items-center ">
      <div className="  h-full  border-8 border-gray-400  w-[400px] bg-white">
        <div className=" flex  p-3 justify-between bg-gray-300 h-8">
          <div className=" ">3:00PM</div>
          <div className="flex space-x-2">
            <FaSignal size={23} />
            <FaBatteryThreeQuarters size={25} />
          </div>
        </div>
        <div className="bg-gray-300  flex h-10 justify-end p-5">
          <BsThreeDotsVertical />
        </div>
        <div className="bg-gray-300 h-32"></div>
        <div className="bg-gray-300 h-16 rounded-b-3xl"></div>
        <div className=" h-[475px] p-3">
          <div className=" flex space-x-5  text-center   justify-center">
            <div className="h-12 w-12 bg-blue-200  p-1 rounded-full">
              <LiaSquareRootAltSolid size={35} />
            </div>
            <div className="h-12 w-12 bg-blue-200  text-2xl p-1  rounded-full">
              π
            </div>
            <div className="h-12 w-12 bg-blue-200  text-2xl p-1 rounded-full">
              ^
            </div>
            <div className="h-12 w-12 bg-blue-200  text-2xl p-2 rounded-full">
              !
            </div>
            <div className="h-12 w-12 bg-blue-200 text-xl p-2  rounded-full">
              v
            </div>
          </div>
          <div className="flex flex-col">
            <button className="h-[70px] w-[70px] rounded-full bg-gray-400"></button>
            <button className="h-[70px] w-[70px] rounded-full bg-gray-400"></button>
            <button className="h-[70px] w-[70px] rounded-full bg-gray-400"></button>
            <button className="h-[70px] w-[70px] rounded-full bg-gray-400"></button>
            <button className="h-[70px] w-[70px] rounded-full bg-gray-400"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
