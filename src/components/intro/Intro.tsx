import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

export default function Intro() {
    const { data: session } = useSession();
    return (
        <div className="relative">
            <span className="text-8xl font-bold drop-shadow-2xl">Tuner2</span>
            <div 
                className="shadow-2xl absolute -right-4 md:-right-20 -top-10 md:top-24 z-0 bg-primary p-2 md:p-4 rounded-3xl text-sm md:text-2xl font-bold text-secondary-content w-fit transition-all"
            >
                {`<Dashboard/>`}
            </div>
            <div>
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                </div> <span className="drop-shadow-2xl">Bot is online</span>
            </div>

            { 
                session 
                ?
                <button className="
                    text-white absolute btn btn-primary border-base-200 bg-base-200 w-full 
                     -bottom-20 md:-bottom-30 text-sm text-center animate-pulse shadow-2xl pl-1 hover:text-primary transition-all"
                >
                    <Image src={session.user?.image as string} width={200} height={200} className="w-6 rounded-full mr-1 transition-all" alt="discord-logo"/>
                    {`Continue to dashboard as ${session?.user?.name} >>`}
                </button>
                :
                <button 
                    className="
                    text-white absolute btn btn-primary border-base-200 bg-base-200 w-full 
                    -bottom-20 md:-bottom-30 text-sm text-center animate-pulse shadow-2xl pl-1"
                    onClick={() => signIn("discord")}

                >
                    <Image src={"/assets/discord_logo.png"} width={200} height={200} className="w-6 mr-1" alt="discord-logo"/>
                    {`Sign in with Discord`}
                </button>
            }
        </div>
    );
}