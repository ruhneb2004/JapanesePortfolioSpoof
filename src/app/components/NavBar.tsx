import { useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { NavBarButton } from "./NavBarButton";
import { MotionValue } from "framer-motion";

export const NavBar = ({
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
  scrollYProgress,
}: {
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  scrollYProgress: MotionValue<number>;
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div
      className={`${
        scrollProgress < 0.25 || scrollProgress > 0.75
          ? "hover:shadow-red-500"
          : "hover:shadow-black"
      } bg-black w-[85%] absolute  top-6 bottom-0 left-1/2 -translate-x-1/2 shadow-sm shadow-gray-900 h-24 mx-auto rounded-3xl border-2 border-red-800 z-50 p-1 hover:shadow-md  transition-all duration-300`}
    >
      <div className="border-1 border-red-900 w-[100%] rounded-2xl h-full shadow-red-900 shadow-sm hover:shadow-red-400 hover:border-red-400 transition-all flex items-center justify-between p-10">
        <div className=" text-white peer font-black text-3xl font-[Zen_Kaku_Gothic_New]   py-2 w-44 hover:w-[100%] transition-all duration-500 ease-out text-center hover:bg-gradient-to-r hover:from-red-950 hover:via-red-900 hover:to-red-950">
          ベンハー
        </div>
        <div className="hidden lg:flex gap-0 items-center transition-all duration-500 min-w-0 peer-hover:hidden peer-hover:translate-x-2 transform">
          <NavBarButton
            engText="About"
            japText="自己紹介"
            className={`${
              scrollProgress < 0.25 ? "text-red-500 font-medium" : ""
            }`}
            onClick={scrollToAbout}
          />
          <NavBarButton
            engText="Skills"
            japText="スキル"
            className={`${
              scrollProgress >= 0.25 && scrollProgress < 0.5
                ? "text-red-500 font-medium"
                : ""
            }`}
            onClick={() => {
              scrollToSkills();
            }}
          />
          <NavBarButton
            engText="Projects"
            japText="プロジェクト"
            className={`${
              scrollProgress >= 0.5 && scrollProgress < 0.75
                ? "text-red-500 font-medium"
                : ""
            }`}
            onClick={() => {
              scrollToProjects();
              console.log(scrollYProgress);
            }}
          />

          <NavBarButton
            engText="Contact"
            japText="れんらくさき"
            className={`${
              scrollProgress >= 0.75 ? "text-red-500 font-medium" : ""
            }`}
            onClick={scrollToContact}
          />
        </div>
        <button
          className="lg:hidden text-white text-2xl transition-all duration-500 min-w-0 text-center peer-hover:hidden peer-hover:translate-x-2 transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col gap-2 items-center text-white bg-black border-t border-red-800 p-4 absolute top-28 right-0 h-72 rounded-3xl transition-all duration-300 ease-out transform animate-fade-in-down">
          <NavBarButton
            engText="About"
            japText="自己紹介"
            className={`${
              scrollProgress < 0.25 ? "text-red-500 font-medium" : "text-white"
            }`}
            onClick={() => {
              scrollToAbout();
              setMobileMenuOpen(false);
            }}
          />
          <NavBarButton
            engText="Skills"
            japText="スキル"
            className={`${
              scrollProgress >= 0.25 && scrollProgress < 0.5
                ? "text-red-500 font-medium"
                : "text-white"
            }`}
            onClick={() => {
              scrollToSkills();
              setMobileMenuOpen(false);
            }}
          />
          <NavBarButton
            engText="Projects"
            japText="プロジェクト"
            className={`${
              scrollProgress >= 0.5 && scrollProgress < 0.75
                ? "text-red-500 font-medium"
                : "text-white"
            }`}
            onClick={() => {
              scrollToProjects();
              setMobileMenuOpen(false);
            }}
          />
          <NavBarButton
            engText="Contact"
            japText="れんらくさき"
            className={`${
              scrollProgress >= 0.75 ? "text-red-500 font-medium" : "text-white"
            }`}
            onClick={() => {
              scrollToContact();
              setMobileMenuOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};
