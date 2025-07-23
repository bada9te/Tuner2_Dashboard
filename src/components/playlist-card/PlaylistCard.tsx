import { CogIcon, Delete, TrashIcon } from "lucide-react";

type TPlaylistProps = {
    name: string;
    ownerId: string;
    color: string;
    songs: string[];
}

export default function PlaylistCard({ name, color, songs }: TPlaylistProps) {
    console.log({color})
    return (
        <div className={`card image-full w-80 shadow-2xl mb-1`} style={{ backgroundColor: color }}>
            <div className={`card-body relative`}>
                <h2 className="card-title">{name}</h2>
                <p>{songs.length} songs</p>
                <div className="card-actions justify-end join gap-0 shadow-2xl">
                    <button className="join-item btn btn-sm btn-ghost shadow-2xl backdrop-blur-md bg-gray-600/30"><CogIcon size={16}/>Configure</button>
                    <button className="join-item btn btn-sm btn-ghost shadow-2xl backdrop-blur-md bg-red-600/30"><TrashIcon size={16}/></button>
                </div>
            </div>
        </div>
    );
}