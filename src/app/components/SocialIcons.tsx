"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Icons } from "./svgIcons/Icons";
import Link from "next/link";

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
          <Link href="https://mail.google.com/mail/u/0/?to=benhurbenny007@gmail.com&su=Have%20A%20good%20day&fs=1&tf=cm">
            {" "}
            <Icons.gmail className="size-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://x.com/ruhneb0_0">
            <Icons.twitter className="size-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="https://github.com/ruhneb2004">
            <Icons.github className="size-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 text-white" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://www.linkedin.com/in/benhur-benny-80819a291/">
            <Icons.linkedIn className="size-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
