"use client";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cat from './images/cat.png';
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  
  useGSAP(()=>{
    gsap.set('.cat', {xPercent: -50, yPercent: -50})
    let xTo = gsap.quickTo(".cat", "x", {duration: 0.6, ease: "power3"}),yTo = gsap.quickTo(".cat", "y", {duration: 0.6, ease: "power3"});
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  })
  return (
    <div className="h-screen w-screen pointer-events-none">
        <div className="w-10 h-10 fixed top-0 left-0 pointer-events-none cat" ref={ref}>
        <Image
          src={cat}
          alt="Picture of the cat"
        />
        </div>
    </div>
  );
}
