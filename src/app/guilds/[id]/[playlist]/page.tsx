"use client"
import CreatePlaylistModal from "@/components/create-playlist-modal/CreatePlaylistModal";
import GuildInfo from "@/components/guild-info/GuildInfo";
import PlaylistCard from "@/components/playlist-card/PlaylistCard";
import PlaylistMusicCard from "@/components/playlist-music-card/PlaylistMusicCard";
import useUserPlaylists from "@/hooks/useUserPlaylists";
import { CirclePlus } from "lucide-react";

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";


function hexToRgba(hex: string, opacity: number) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((char) => char + char).join('');
  }
  const bigint = parseInt(c, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}



export default function PlaylistInfoPage() {
    const { playlist, id } = useParams();
    const { data: session } = useSession();

    // TODO: get currently selected channel from the DB
    const { data: playlists, isLoading } = useUserPlaylists(session);

    const currentPlaylist = playlists?.find(i => i._id == playlist);

    console.log({currentPlaylist})

    if (!currentPlaylist) {
        return;
    }
    
    return (
        <div className="w-full h-dvh flex flex-col md:flex-row flex-nowrap items-center md:items-start justify-start md:justify-start gap-5">

            <GuildInfo guildId={id as string}/>

            <div className={`pb-10 px-5 w-full max-w-[320px] md:max-w-full md:w-[calc(100%-285px)] h-fit flex flex-row flex-wrap items-start justify-start gap-4`}>
                <div className="join w-full">
                    <button className="btn join-item btn-primary rounded-l-full"><CirclePlus/> Add</button>
                    <input className="input join-item w-full" placeholder="Track or playlist sharing url" />
                </div>

                {
                    /*
                    
                            <div
                                className="flex flex-col flex-wrap gap-3 w-full h-screen rounded-2xl"
                                style={{
                                    // backgroundColor: `${hexToRgba(currentPlaylist.color, 0.2)}`
                                }}
                            >
                                {
                                    currentPlaylist.songs.map((url: string, key: number) => {
                                        return (
                                            // <PlaylistMusicCard songUrl={url} key={key}/>
                                            null
                                        );
                                    })
                                }
            
                                
                            </div>
                    
                    */
                }

                <PlaylistMusicCard 
                    songUrl={"https://soundcloud.com/joseph-david-medina/rammstein-du-hast-1?si=74eb21669597463daac19174d4fa2af6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                    playlistColor={currentPlaylist.color.replace('#', '')}
                />
                <PlaylistMusicCard 
                    songUrl={"https://soundcloud.com/joseph-david-medina/rammstein-du-hast-1?si=74eb21669597463daac19174d4fa2af6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} 
                    playlistColor={currentPlaylist.color.replace('#', '')}
                />
                <PlaylistMusicCard 
                    songUrl={"https://soundcloud.com/artur-nekipelov/sets/rammstein"} 
                    playlistColor={currentPlaylist.color.replace('#', '')}
                />
                <PlaylistMusicCard 
                    songUrl={"https://soundcloud.com/trending-music-ua/sets/jazz"} 
                    playlistColor={currentPlaylist.color.replace('#', '')}
                />

            </div>
        </div>
    );
}
