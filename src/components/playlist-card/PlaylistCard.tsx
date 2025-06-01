import { CogIcon, Delete, TrashIcon } from "lucide-react";

type TPlaylistProps = {
    title: string;
    amountOfSongs: number;
}

export default function PlaylistCard({ title, amountOfSongs }: TPlaylistProps) {
    return (
        <div className="card bg-base-100 image-full w-80 shadow-2xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body relative">
                <h2 className="card-title">{title}</h2>
                <p>{amountOfSongs} songs</p>
                <div className="card-actions justify-end join gap-0 shadow-2xl">
                    <button className="join-item btn btn-sm btn-primary shadow-2xl"><CogIcon size={16}/>Configure</button>
                    <button className="join-item btn btn-sm btn-error shadow-2xl"><TrashIcon size={16}/></button>
                </div>
            </div>
        </div>
    );
}