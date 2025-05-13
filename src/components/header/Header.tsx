
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Github, LinkIcon, BookOpen, Terminal } from 'lucide-react';

export default function Header() {
    const {data: session} = useSession();

    return (
        <div className="absolute top-4 flex flex-row items-center justify-between w-screen p-4 flex-wrap md:flex-nowrap">
            <div className="flex items-center justify-center gap-4 md:gap-10 py-3 px-10 bg-neutral rounded-3xl flex-wrap md:flex-nowrap">
                <Link href={"/authors"} className="hover:text-primary transition-all flex flex-row gap-2 items-center justify-center text-[0px] md:text-sm"><BookOpen size={20}/>Authors</Link>
                <Link href={"/invite"} className="hover:text-primary transition-all flex flex-row gap-2 items-center justify-center text-[0px] md:text-sm"><LinkIcon size={20}/>Invite bot</Link>
                <Link href={"/commands"} className="hover:text-primary transition-all flex flex-row gap-2 items-center justify-center text-[0px] md:text-sm"><Terminal size={20}/>Commands</Link>
                <Link href={"/github"} className="hover:text-primary transition-all flex flex-row gap-2 items-center justify-center text-[0px] md:text-sm"><Github size={20}/>GitHub</Link>
            </div>
            {
                session ?
                <button 
                    className="btn btn-lg btn-neutral pr-3 md:pr-5 pl-[35px] md:pl-14 shadow-2xl text-[0px] md:text-sm hover:text-primary transition-all flex flex-row gap-3 h-12 relative" 
                    onClick={() => signOut()}
                >
                    <Image src={session.user?.image as string} width={200} height={200} className="w-10 m-1 rounded-full absolute top-0 left-0" alt="discord-logo"/>
                    {session.user?.name}
                </button>
                :
                <button 
                    className="btn btn-lg btn-neutral bg-[#7289da] hover:bg-[#7289daad] pl-3 pr-1 md:pr-5 shadow-2xl text-[0px] md:text-sm"
                    onClick={() => signIn("discord")}
                >
                    <Image src={"/assets/discord_logo.png"} width={200} height={200} className="w-10" alt="discord-logo"/>
                    Sign in with Discord
                </button>
            }
            
        </div>
    );
}