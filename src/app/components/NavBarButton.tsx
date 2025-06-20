type NavBarButtonProps = {
  engText: string;
  japText: string;
  onClick?: () => void;
  className?: string;
};

export const NavBarButton = ({
  engText,
  japText,
  onClick,
  className,
}: NavBarButtonProps) => {
  return (
    <div
      className={`${className} text-red-100 group relative w-36 px-3 py-2 text-center cursor-pointer`}
      onClick={onClick}
    >
      {/* Japanese Label */}
      <span className="block group-hover:hidden text-sm lg:text-md font-japanese group-hover:text-red-300 tracking-widest transition-colors duration-300 ">
        {japText}
      </span>

      {/* English Subtitle */}
      <span className="block text-[0.65rem] group-hover:text-red-300 group-hover:font-sans group-hover:text-xl tracking-widest font-thin text-white opacity-80 group-hover:opacity-100 transition-opacity duration-1000 mt-1">
        {engText}
      </span>

      {/* Optional decorative element for banner style */}
      {/* <span className="absolute bottom-0 left-1/2 w-1 h-1 group-hover:bg-red-500 -translate-x-1/2 rounded-sm group-hover:scale-x-2550 transition-transform duration-300 bg-black" />
      <span className="absolute top-0 left-1/2 w-1 h-1 group-hover:bg-red-500 -translate-x-1/2 rounded-sm group-hover:scale-x-2550 transition-transform duration-300 bg-black" /> */}
    </div>
  );
};
