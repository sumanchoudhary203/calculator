import { LiaSquareRootAltSolid } from "react-icons/lia";

export function Button() {
  return (
    <>
      <div className=" h-[460px] p-3">
        <div className=" flex space-x-2  text-center   justify-center">
          <div className="h-10 w-10 text-gray-500 hover:bg-gray-600  p-1 rounded-full">
            <LiaSquareRootAltSolid size={35} />
          </div>
          <div className="h-10 w-10 hover:bg-gray-800  text-gray-500 text-2xl p-1  rounded-full">
            π
          </div>
          <div className="h-10 w-10 hover:bg-gray-800  text-gray-500 text-2xl p-1 rounded-full">
            ^
          </div>
          <div className="h-10 w-10 hover:bg-gray-800  text-gray-500 text-2xl p-2 rounded-full">
            !
          </div>
          <div className="h-10 w-10 hover:bg-gray-800 text-gray-500 text-xl p-2  rounded-full">
            v
          </div>
        </div>
        <div className="flex p-3">
          <div className="flex flex-col space-y-1 p-1">
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[27px] hover:bg-gray-800">
              AC
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              7
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              4
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              1
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              0
            </button>
          </div>
          <div className="flex flex-col space-y-1 p-1">
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[27px] hover:bg-gray-800">
              +/-
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              8
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              5
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              2
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              .
            </button>
          </div>
          <div className="flex flex-col space-y-1 ">
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[27px] hover:bg-gray-800">
              %
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              9
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              6
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800">
              3
            </button>
            <button className="h-[60px] w-[60px] rounded-full text-white text-[27px] hover:bg-gray-800"></button>
          </div>
          <div className="flex flex-col space-y-1 p-1">
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[27px] hover:bg-gray-800">
              /
            </button>
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[27px] hover:bg-gray-800">
              x
            </button>
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600 text-[40px] hover:bg-gray-800">
              -
            </button>
            <button className="h-[60px] w-[60px] rounded-full  text-orange-600   text-[27px] hover:bg-gray-800">
              +
            </button>
            <button className="h-[60px] w-[60px] rounded-full  text-white text-[27px] bg-orange-700 hover:bg-orange-400">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
