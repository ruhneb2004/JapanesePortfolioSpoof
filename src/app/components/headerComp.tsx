// import { anton } from "../utils/font";

export const HeaderComp = () => {
  return (
    // <div
    //   className={`flex flex-col w-fit text-2xl ${anton.className} group relative py-2 text-red-900`}
    // >
    //   Skills
    //   <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-red-500 -translate-x-1/2 rounded-sm group-hover:scale-x-2550 transition-transform duration-300 " />
    //   <span className="absolute top-0 left-1/2 w-1 h-1 group-hover:bg-red-500 -translate-x-1/2 rounded-sm group-hover:scale-x-2550 transition-transform duration-300 bg-red-500" />
    // </div>

    <div className="hover:bg-gradient-to-r hover:from-red-950 hover:via-red-900 w-fit  shadow-sm shadow-gray-700 h-12  border-2 border-red-800 z-50 p-1 hover:shadow-md hover:shadow-red-500 transition-all duration-300">
      <div className="border-1 border-red-900 w-[100%] h-full shadow-red-900 shadow-sm hover:shadow-red-400 hover:border-red-400 transition-all flex items-center justify-between ">
        <div className="peer font-black text-xl font-[Zen_Kaku_Gothic_New]   py-2 w-32  transition-all duration-500 ease-out text-center  hover:to-red-950">
          スキル
        </div>
      </div>
    </div>
  );
};
