import { guildImageIdToDiscordCDN } from "@/utils/imageIdToDiscordCDN";
import Image from "next/image";


export default function GuildCardSkeleton() {

    return (
        <div className="card bg-base-200 min-w-80 h-fit shadow-lg">
            <div className="card-body">
                <div className="flex flex-row gap-3 items-center justify-start">
                    <div className="w-14 h-14 rounded-full shadow-2xl skeleton"/>
                    <div className="card-title skeleton w-36 h-8"></div>
                </div>
                
                
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-sm btn-primary w-full skeleton bg-green-700"></button>
                </div>
            </div>
        </div>
    );
}