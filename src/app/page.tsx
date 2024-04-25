"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

import TextTransition, { presets } from 'react-text-transition';
const TEXTS:Array<{text:string,gradient:string}> = [{text:'modern',gradient:'linear-gradient(to right, #ed4264, #ffedbc)'},{text:'secure',gradient:'linear-gradient(90deg, hsla(139, 72%, 83%, 1) 0%, hsla(229, 89%, 75%, 1) 100%)'},{text:'failproof',gradient:'linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)'}];
function ChangingText(){


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => 
        setIndex((currentIndex) => currentIndex + 1 === TEXTS.length ? 0 : currentIndex + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const textObject = TEXTS[index]
  return(
<TextTransition inline springConfig={presets.gentle} className="gradientChangingText" style={{'--gradient':textObject.gradient}}>{textObject.text}</TextTransition>
  )
}

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-center">A <ChangingText/> paywall for your events.</h1>
    </>
  );
}
