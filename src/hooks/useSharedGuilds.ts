import { useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';


const fetchSharedGuilds = async (session: Session | null) => {
    const userRes = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        },
    });
    if (!userRes.ok) {
        throw new Error('Failed to fetch user guilds');
    }

    const userGuilds = await userRes.json() as any[];

    const botRes = await fetch("/api/discord/bot/guilds");
    if (!botRes.ok) {
        throw new Error('Failed to fetch bot guilds');
    }

    const botGuilds = await botRes.json() as any[];

    return botGuilds.filter(guild => userGuilds.map(i => i.id).includes(guild.id));
};

const useSharedGuilds = (session: Session | null) => {
    return useQuery({
        queryKey: ["shared-guilds"],
        queryFn: async () => await fetchSharedGuilds(session),
        enabled: session !== null,
        retryDelay: 2000,
    });
};

export default useSharedGuilds;
