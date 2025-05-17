import { useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';


const fetchGuildChannels = async (id: string) => {
     const res = await fetch(`/api/discord/bot/channels`, { 
        method: 'GET',
        headers: {
            guild_id: id
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch guild channels');
    }

    const channels = await res.json() as any[];

    return channels;
};

const useGuildChannles = (id: string, session: Session | null) => {
    return useQuery({
        queryKey: [`guild-channles-${id}`],
        queryFn: async () => await fetchGuildChannels(id),
        enabled: session !== null,
        retryDelay: 2000,
    });
};

export default useGuildChannles;
