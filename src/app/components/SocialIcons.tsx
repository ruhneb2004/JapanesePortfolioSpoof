"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "./svgIcons/Icons";

export function Contacts() {
  return (
    <div className="relative">
      <Dock
        direction="middle"
        className="border-none"
        iconMagnification={100}
        iconDistance={80}
        iconSize={50}
      >
        <DockIcon>
          <Icons.gmail className="size-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        </DockIcon>
        <DockIcon>
          <Icons.twitter className="size-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        </DockIcon>
        <DockIcon>
          <Icons.github className="size-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 text-white" />
        </DockIcon>

        <DockIcon>
          <Icons.linkedIn className="size-40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        </DockIcon>
      </Dock>
    </div>
  );
}
