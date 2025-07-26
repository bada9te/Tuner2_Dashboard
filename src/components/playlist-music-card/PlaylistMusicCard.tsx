import { CogIcon, Delete, Play, PlayCircle, TrashIcon } from "lucide-react";
import ConfirmActionModal from "../confirm-action-modal/ConfirmActionModal";
import Link from "next/link";
import { useEffect } from "react";

type TPlaylistMusicCard = {
    songUrl: string,
    playlistColor: string;
}

export default function PlaylistMusicCard({ songUrl, playlistColor }: TPlaylistMusicCard) {

    const url = new URL(songUrl);
    const cleanUrl = `${url.origin}${url.pathname}`;
    const encodedUrl = encodeURIComponent(cleanUrl);

    return (
        <div className={`card image-full w-80 shadow-2xl mb-1 relative`}>

                <ConfirmActionModal
                    confirmTextDescription="Delete this item from playlist?"
                    confirmTextOnBtn="Yes, delete"
                    handleConfirm={() => {}}
                    openButton={
                        <span className="h-10 btn btn-sm btn-ghost shadow-2xl backdrop-blur-md bg-red-600/30 rounded-full absolute bottom-2 right-2 z-10"><TrashIcon size={16}/></span>
                    }
                />

            <div 
                style={{
                    left: 0,
                    width: "auto", 
                    height: "200px", 
                    position: "relative",
                    borderRadius: "14px",
                }}
            >   
                <iframe 
                    src={`https://w.soundcloud.com/player/?visual=true&url=${encodedUrl}&show_artwork=true&color=%23${playlistColor}`}
                    style={{
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        border: 0,
                        borderRadius: "14px",
                    }}
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}