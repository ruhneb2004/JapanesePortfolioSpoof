"use client";
import { ParallaxProvider } from "react-scroll-parallax";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
