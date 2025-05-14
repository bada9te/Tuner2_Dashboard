"use client"
import Intro from "@/components/intro/Intro";


export default function Home() {
  return (
    <div 
      className="
        w-screen h-screen flex items-center justify-center bg-repeat-x
        bg-base-100 bg-[url(/assets/bg_bottom.png)] bg-cover animate-scroll-bg-mobile md:animate-scroll-bg-pc
        bg-top
      "
    >
      <Intro/>
    </div>
  );
}
