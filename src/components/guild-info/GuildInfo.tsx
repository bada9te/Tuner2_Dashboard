import useGuildChannles from "@/hooks/useGuildChannels";
import useSharedGuilds from "@/hooks/useSharedGuilds";
import { useSession } from "next-auth/react";
import CurrentGuildInfo from "../current-guild-info/CurrentGuildInfo";
import CurrentMusicChannel from "../current-music-channel/CurrentMusicChannel";
import CurrentMusicChannelSkeleton from "../current-music-channel/CurrentMusicChannelSkeleton";

export default function GuildInfo({guildId}: { guildId: string }) {
    const { data: session } = useSession();
    const { data: guildChannles } = useGuildChannles(guildId as string, session);
    const { data: guilds } = useSharedGuilds(session);


    return (
        <div className="min-w-[285px] h-fit md:h-full flex flex-col gap-5">
            <CurrentGuildInfo guild={guilds?.find(i => i.id == guildId)}/>
            {
                guildChannles 
                ?
                <CurrentMusicChannel data={guildChannles} userIsOwner={guilds?.find(i => i.id == guildId).owner}/>
                :
                <CurrentMusicChannelSkeleton/>
            }
        </div>
    );
}