"use client"

import GuildCard from "@/components/guild-card/GuildCard";
import GuildCardSkeleton from "@/components/guild-card/GuildCardSkeleton";
import useSharedGuilds from "@/hooks/useSharedGuilds";
import { useSession } from "next-auth/react";

export default function Guilds() {
    const { data: session } = useSession();
    const { data: guilds, isLoading } = useSharedGuilds(session);
    

    return (
        <div className="w-full h-full flex flex-row flex-wrap items-start justify-center md:justify-start gap-5">
            {
                (() => {
                    if (isLoading) {
                        return (
                            <>
                                <GuildCardSkeleton/>
                                <GuildCardSkeleton/>
                                <GuildCardSkeleton/>
                            </>
                        );
                    }

                    if (guilds?.length) {
                        return [
                            ...guilds.map((guild, key) => {
                                return <GuildCard key={key} {...guild} />
                            }),
                        ]
                        
                    } else {
                        return (
                            <div className="text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                No guilds or no access
                            </div>
                        );
                    }
                })()
            }
        </div>
    );
}