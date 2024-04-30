"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";
const TEXTS: Array<{ text: string; gradient: string }> = [
  { text: "modern", gradient: "linear-gradient(to right, #ffedbc, #ff5577)" },
  {
    text: "secure",
    gradient:
      "linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 75%, 1) 100%)",
  },
  {
    text: "failproof",
    gradient:
      "linear-gradient(90deg, hsla(295, 100%, 84%, 1) 0%, hsla(238, 100%, 77%, 1) 100%)",
  },
];
function ChangingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((currentIndex) =>
          currentIndex + 1 === TEXTS.length ? 0 : currentIndex + 1
        ),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const textObject = TEXTS[index];
  return (
    <TextTransition
      inline
      springConfig={presets.gentle}
      className="gradientChangingText"
      style={{ "--gradient": textObject.gradient }}
    >
      {textObject.text}
    </TextTransition>
  );
}
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-5 transition-all group-hover:ml-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh_-_88px_*_2)] min-h-72">
      <h1 className="text-6xl text-center">
        A <ChangingText /> paywall for your events.
      </h1>
      <p className="text-center leading-8 text-xl text-gray-400 max-w-3xl mt-4">
        Make planning much easier with a system customized just for you.
        Simplify filtering out dangerous requests, thanks to our advanced
        AI-powered security algoritms.
      </p>
      <div className="flex gap-3 items-center mt-5">
        <Button data-cursor-scale size="lg" endContent={<ArrowIcon />}>
          Get started
        </Button>
        <Button data-cursor-scale size="lg" variant="flat">
          Pricing
        </Button>
      </div>
    </div>
  );
}
