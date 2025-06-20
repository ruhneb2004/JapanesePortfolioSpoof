"use client";
import { useRef } from "react";
import { CanvasComp } from "./CanvasComp";
import { anton } from "../utils/font";
import { Skills } from "./SkillsSection";

import { ProjectComp } from "./ProjectComp";
import { NavBar } from "./NavBar";
import { useScroll } from "framer-motion";
import { Meteors } from "@/components/magicui/meteors";
import { Contacts } from "./SocialIcons";

export default function ScrollSections() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black"
      ref={containerRef}
    >
      <NavBar
        scrollToAbout={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToSkills={() =>
          skillsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToProjects={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToContact={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollYProgress={scrollYProgress}
      />
      <div
        className="panel snap-start lg:flex-row flex flex-col w-full h-screen bg-black"
        ref={aboutRef}
      >
        <div className="text-red-900 pt-40 flex gap-5 flex-col w-full px-16 md:px-32">
          <div className="flex flex-col gap-2 ">
            <span
              className={`text-5xl md:text-6xl ${anton.className} text-start w-96 hover:bg-white hover:w-[100%] transition-all duration-300`}
            >
              Benhur P Benny
            </span>
            <span className="font-bold">Web3 FullStack Developer</span>
          </div>
          <div className="w-[100%] ">
            <div className="text-sm xl:text-base">
              I’m Benhur Benny, a computer science undergraduate from GEC
              Thrissur with a passion for full stack development and blockchain.
              I enjoy building real world projects, exploring new technologies,
              and constantly improving through hands on experience and
              hackathons.
            </div>
          </div>
        </div>
        <div className="w-full relative lg:pt-72">
          <CanvasComp />
        </div>
      </div>
      {/* Page 2 */}
      <div
        className="panel snap-start h-screen bg-red-900 w-full "
        ref={skillsRef}
      >
        <Skills />
      </div>
      {/* page 3 */}
      <div
        className="panel snap-start xl:h-[117vh] lg:h-[120vh] md:h-[190vh] sm:h-[195vh] h-[250vh] w-full"
        ref={projectsRef}
      >
        <ProjectComp />
      </div>
      {/* Contact Section */}
      <div className="panel snap-start h-screen w-full relative overflow-hidden flex flex-col gap-10 items-center justify-center ">
        <Meteors number={50} />
        <div
          className={` ${anton.className} text-6xl text-red-900 font-bold text-center px-40`}
        >
          I’m open to collaborations, freelance work, or just a good chat about
          tech
        </div>
        <div
          className={` ${anton.className} text-3xl text-red-900 font-bold text-center px-40`}
        >
          Get in touch
        </div>
        <div ref={contactRef}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
