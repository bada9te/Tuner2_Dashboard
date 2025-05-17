"use client"
import BotStatus from "@/components/bot-status/BotStatus";
import BreadNav from "@/components/bread-nav/BreadNav";
import CurrentMusicChannel, { TChannelData } from "@/components/current-music-channel/CurrentMusicChannel";
import CurrentMusicChannelSkeleton from "@/components/current-music-channel/CurrentMusicChannelSkeleton";
import useGuildChannles from "@/hooks/useGuildChannels";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";


export default function GuildInfoPage() {
    const { id } = useParams();
    const { data: session } = useSession();
    const { data: guildChannles } = useGuildChannles(id as string, session);

    // TODO: get currently selected channel from the DB

    return (
        <div className="mt-28 p-0 md:py-5 md:px-10 w-full h-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-5 bg-base-100">
            <BreadNav/>
            <BotStatus absolute/>
            <div className="w-full h-full flex flex-row flex-wrap items-start justify-center md:justify-start gap-5">
                {
                    guildChannles 
                    ?
                    <CurrentMusicChannel data={guildChannles}/>
                    :
                    <CurrentMusicChannelSkeleton/>
                }
            </div>
        </div>
    );
}