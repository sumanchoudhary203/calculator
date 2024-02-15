import { useEffect, useState } from "react";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "./button";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="  h-screen w-full bg-gray-400  flex justify-center  items-center ">
      <div className="  h-[670px]   w-[320px] bg-black">
        <div className=" flex  p-3 justify-between bg-black h-10">
          <div className=" text-white">3:00PM</div>
          <div className="flex space-x-2">
            <FaSignal size={23} className="text-white" />
            <FaBatteryThreeQuarters size={25} className="text-white" />
          </div>
        </div>
        <div className=" flex h-10 justify-end text-white p-5">
          <BsThreeDotsVertical />
        </div>
        <input className="    flex justify-end p-3 bg-black text-[25px] text-white h-32">
          {/* {input} */}
        </input>
        <div className=" h-16 border-b-2 text-white text-[20px] border-white flex justify-end pr-12 rounded-b-3xl">
          gyui{output}
        </div>
        <Button />
      </div>
    </div>
  );
}
export default App;
