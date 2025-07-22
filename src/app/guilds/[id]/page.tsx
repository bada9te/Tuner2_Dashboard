"use client"
import BotStatus from "@/components/bot-status/BotStatus";
import BreadNav from "@/components/bread-nav/BreadNav";
import CurrentGuildInfo from "@/components/current-guild-info/CurrentGuildInfo";
import CurrentMusicChannel, { TChannelData } from "@/components/current-music-channel/CurrentMusicChannel";
import CurrentMusicChannelSkeleton from "@/components/current-music-channel/CurrentMusicChannelSkeleton";
import PlaylistCard from "@/components/playlist-card/PlaylistCard";
import useGuildChannles from "@/hooks/useGuildChannels";
import useSharedGuilds from "@/hooks/useSharedGuilds";
import useUserPlaylists from "@/hooks/useUserPlaylists";
import { PackagePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";


export default function GuildInfoPage() {
    const { id } = useParams();
    const { data: session } = useSession();
    const { data: guildChannles } = useGuildChannles(id as string, session);
    const { data: guilds } = useSharedGuilds(session);

    // TODO: get currently selected channel from the DB
    const { data: playlists, isLoading } = useUserPlaylists(session);

    console.log({ session })
    
    return (
        <div className="mt-28 p-0 md:py-5 md:px-10 w-full h-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-5 bg-base-100">
            <BreadNav/>
            <BotStatus absolute/>
            <div className="w-full h-dvh flex flex-col md:flex-row flex-nowrap items-center md:items-start justify-start md:justify-start gap-5">
                <div className="min-w-[285px] h-fit md:h-full flex flex-col gap-5">
                    <CurrentGuildInfo guild={guilds?.find(i => i.id == id)}/>
                    {
                        guildChannles 
                        ?
                        <CurrentMusicChannel data={guildChannles} userIsOwner={false}/>
                        :
                        <CurrentMusicChannelSkeleton/>
                    }
                </div>
                

                <div className="pb-10 px-5 w-full max-w-[320px] md:max-w-full md:w-[calc(100%-285px)] h-fit flex flex-row flex-wrap items-start justify-start gap-5">

                    <button className="w-full h-24 btn btn-ghost border-dashed border-2 border-primary hover:bg-base-200 rounded-2xl"
                    >
                        <PackagePlus/> New Playlist
                    </button>
                    {
                        isLoading ?
                        "Fetching playlists..." :
                        (() => {
                            if (playlists?.length) {
                                return playlists.map((pl, key) => {
                                    return (
                                        <PlaylistCard {...pl} key={key}/>
                                    );
                                })
                            } else {
                                return "No playlists"
                            }
                        })()
  
                    }
                </div>
            </div>
        </div>
    );
}