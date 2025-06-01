import { guildImageIdToDiscordCDN } from "@/utils/imageIdToDiscordCDN";
import Image from "next/image";

export default function CurrentGuildInfo({ guild }: { guild?: { id: string, name: string, icon: string } }) {
    console.log(guild)
    return (
        <ul className="list bg-base-200 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Current server</li>
            
            <li className="list-row gap-3">
                {
                    guild?.icon ?
                    <Image src={guildImageIdToDiscordCDN(guild.id, guild.icon)} className="rounded-full w-5 h-5" alt="guild-avatar" width={50} height={50} /> :
                    <div className="skeleton w-5 h-5 rounded-full"></div>
                }
                {guild?.name || "Loading..."}
            </li>
        </ul>
    );
}