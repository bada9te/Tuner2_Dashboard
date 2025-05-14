import { guildImageIdToDiscordCDN } from "@/utils/imageIdToDiscordCDN";
import Image from "next/image";
import { useEffect } from "react";

type TGuildCard = {
    id: string;
    name: string;
    icon: string;
}

export default function GuildCard({ id, name, icon }: TGuildCard) {
    useEffect(() => {
        async function getMembers() {
            return await fetch("/api/discord/bot/members", {
                headers: {
                    guild_id: id
                }
            });
        }

        getMembers().then((data) => {
            console.log(data.json())
        });
    }, [id]);
    return (
        <div className="card bg-base-200 w-80 h-fit shadow-lg">
            <div className="card-body">
                <div className="flex flex-row gap-3 items-center justify-start">
                    <Image src={guildImageIdToDiscordCDN(id, icon)} alt="guild-image" width={250} height={250} className="w-14 rounded-full shadow-2xl"/>
                    <h2 className="card-title">{name.length > 16 ? `${name.substring(0, 14)}...` : name}</h2>
                </div>
                
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-sm btn-primary w-full">Open</button>
                </div>
            </div>
        </div>
    );
}