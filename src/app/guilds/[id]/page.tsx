"use client"
import CreatePlaylistModal from "@/components/create-playlist-modal/CreatePlaylistModal";
import GuildInfo from "@/components/guild-info/GuildInfo";
import PlaylistCard from "@/components/playlist-card/PlaylistCard";
import useUserPlaylists from "@/hooks/useUserPlaylists";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";


export default function GuildInfoPage() {
    const { id } = useParams();
    const { data: session } = useSession();

    // TODO: get currently selected channel from the DB
    const { data: playlists, isLoading } = useUserPlaylists(session);
    
    return (
        <div className="w-full h-dvh flex flex-col md:flex-row flex-nowrap items-center md:items-start justify-start md:justify-start gap-5">
            
            <GuildInfo guildId={id as string} />

            <div className="pb-10 px-5 w-full max-w-[320px] md:max-w-full md:w-[calc(100%-285px)] h-fit flex flex-row flex-wrap items-start justify-start gap-4">

                <CreatePlaylistModal/>
                {
                    isLoading ?
                    "Fetching playlists..." :
                    (() => {
                        if (playlists?.length) {
                            return playlists.map((pl, key) => {
                                return (
                                    <PlaylistCard {...pl} underlyingGuild={id} key={key}/>
                                );
                            })
                        } else {
                            return "No playlists"
                        }
                    })()

                }
            </div>
        </div>
    );
}