import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import useDiscordUser from "./useDiscordUser";


const fetchUserPlaylists = async(session: Session, user: any) => {
    if (!user) {
        throw new Error("No discord user found at api");
    }

    const res = await fetch('/api/data/playlists', {
        method: 'GET',
        headers: {
            owner_id: user.id
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch playlists');
    }

    const data = await res.json();

    return data.playlists as any[];
}

const useUserPlaylists = (session: Session | null) => {
    const { data: user } = useDiscordUser(session);

    return useQuery({
        queryKey: [`user-playlists`],
        queryFn: async() => await fetchUserPlaylists(session as Session, user),
        enabled: session !== null && user !== null,
        retryDelay: 2000,
    });
}

export default useUserPlaylists;