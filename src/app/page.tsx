"use client"
import Diff from "@/components/diff/Diff";
import Intro from "@/components/intro/Intro";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  console.log(session)

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
