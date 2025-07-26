import { CogIcon, Delete, Play, PlayCircle, TrashIcon } from "lucide-react";
import ConfirmActionModal from "../confirm-action-modal/ConfirmActionModal";
import Link from "next/link";

type TPlaylistProps = {
    _id: string;
    name: string;
    ownerId: string;
    color: string;
    songs: string[];
    underlyingGuild: string;
}

export default function PlaylistCard({ name, color, songs, underlyingGuild, _id }: TPlaylistProps) {
    return (
        <div className={`card image-full w-80 shadow-2xl mb-1`} style={{ backgroundColor: color }}>
            <div className={`card-body relative`}>
                <h2 className="card-title">{name}</h2>
                <p>{songs.length} songs</p>
                <div className="card-actions justify-end gap-1">
                    <Link href={`/guilds/${underlyingGuild}/${_id}`} className="h-10 btn btn-sm btn-ghost shadow-2xl backdrop-blur-md bg-gray-600/30"><Play size={16}/></Link>
                    <ConfirmActionModal
                        confirmTextDescription="Delete this playlist?"
                        confirmTextOnBtn="Yes, delete"
                        handleConfirm={() => {}}
                        openButton={
                            <span className="h-10 btn btn-sm btn-ghost shadow-2xl backdrop-blur-md bg-red-600/30 rounded-full"><TrashIcon size={16}/></span>
                        }
                    />
                </div>
            </div>
        </div>
    );
}