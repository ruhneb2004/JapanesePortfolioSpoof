import { useEffect, useState } from "react";
import { anton } from "../utils/font";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Icons } from "./svgIcons/Icons";

export const Skills = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = screenWidth < 768;
  const smallIconSize = isSmallScreen ? 70 : 100;
  const smallRadius = isSmallScreen ? 100 : 150;
  const largeRadius = isSmallScreen ? 200 : 300;

  return (
    <div className="relative flex h-screen text-white w-full flex-col items-center justify-center overflow-visible">
      <div
        className={`${anton.className} text-white text-lg sm:text-xl bg-black w-20 h-20 rounded-full flex items-center justify-center `}
      >
        Skills
      </div>
      <OrbitingCircles
        iconSize={smallIconSize}
        radius={smallRadius}
        speed={0.0}
        className="rotate-180"
      >
        <div className="group w-12 h-24 flex flex-col items-center justify-center">
          <Icons.react_comma />
          <span className="hidden group-hover:inline-block text-xs text-white/70 rotate-180 absolute -bottom-3">
            React
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center rotate-90">
          <Icons.postgress_comma />
          <span className="hidden group-hover:inline-block text-xs text-white/70 rotate-180 absolute -bottom-3">
            Postgres
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center -rotate-90">
          <Icons.tailwind_comma />
          <span className="hidden group-hover:inline-block text-xs text-white/70 rotate-180 absolute -bottom-3">
            Tailwindcss
          </span>
        </div>
      </OrbitingCircles>

      <OrbitingCircles radius={largeRadius} reverse iconSize={smallIconSize}>
        <div className="group w-24 h-24 flex flex-col items-center justify-center">
          <Icons.zustand />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            Zustand
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center text-blue-900">
          <Icons.chainlink />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            Chainlink
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center">
          <Icons.solidity />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            Solidity
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center">
          <Icons.nextjs />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            Next js
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center">
          <Icons.typescript />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            TypeScript
          </span>
        </div>
        <div className="group w-24 h-24 flex flex-col items-center justify-center">
          <Icons.prisma />
          <span className="hidden group-hover:inline-block text-xs text-white/70  absolute -bottom-3">
            Prisma
          </span>
        </div>
      </OrbitingCircles>
    </div>

    // </div>
  );
};
