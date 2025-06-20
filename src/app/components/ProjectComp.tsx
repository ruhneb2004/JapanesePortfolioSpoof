import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { anton } from "../utils/font";
import Image from "next/image";

const features = [
  {
    Icon: FileTextIcon,
    name: "Sketch And Mint",
    description: "Mint your sketches as NFTs on the blockchain.",
    githubHref: "https://github.com/ruhneb2004/AuthFusion",
    websiteHref: "https://sketch-and-mint.vercel.app/",
    background: (
      <Image
        className="absolute bottom group-hover:scale-105 transition-all duration-300 ease-out  opacity-60"
        src={"/sketchMintPhone.png"}
        alt="Sketch and Mint"
        fill
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Chain Reviwer",
    description:
      "Chaineviewer connects clients and freelancers with secure, smart contract powered job deals.",
    githubHref: "https://github.com/ruhneb2004/chain_reviewer",
    background: (
      <Image
        className="absolute top-0 scale-120 group-hover:scale-135 transition-all duration-300 ease-out  opacity-60"
        src={"/chainReviwer.png"}
        alt="Chain Reviwer"
        fill
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Auth Fusion",
    description:
      "AuthFusion links Web2 logins with Web3 wallets using NFTs for seamless identity verification.",
    githubHref: "https://github.com/ruhneb2004/AuthFusion",
    background: (
      <Image
        className="absolute top-0 -left-24 scale-170 group-hover:scale-185 transition-all duration-300 ease-out  opacity-60"
        src={"/authFusion.png"}
        alt="Auth Fusion"
        fill
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "GECT Event Tracker",
    description:
      "GECT Event Tracker helps students discover, track, and manage college events with ease",
    githubHref: "https://github.com/ruhneb2004/Gec-Thrissur-Event-Tracker",
    websiteHref: "https://gec-thrissur-event-tracker.vercel.app/",
    background: (
      <Image
        className="absolute bottom-0 group-hover:scale-105 transition-all duration-300 ease-out  opacity-60"
        src={"/eventTrackerPhone.png"}
        alt="GECT Event Tracker"
        fill
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "NearBy",
    description:
      "Simple frontend only project showcasing tailwindcss and daisyUI.",
    githubHref: "https://github.com/ruhneb2004/externalProject",
    websiteHref: "https://ruhneb2004.github.io/externalProject/",
    background: (
      <Image
        className="absolute bottom-0 group-hover:scale-105 transition-all duration-300 ease-out  opacity-60"
        src={"/nearBy.png"}
        alt="NearBy"
        fill
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

export const ProjectComp = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-black">
      <MagicCard
        className="  border-red-950 border-2 p-10 h-full w-screen flex flex-row items-end justify-center pb-12"
        gradientColor="red"
        gradientOpacity={0.4}
        gradientSize={1800}
      >
        <h2 className={`${anton.className} text-6xl text-red-800 `}>
          Projects
        </h2>
        <BentoGrid className="lg:grid-rows-2 sm:grid-rows-3 sm:grid-cols-3">
          {features.map((feature, id) => (
            <BentoCard key={id} {...feature} />
          ))}
        </BentoGrid>
      </MagicCard>
    </div>
  );
};
