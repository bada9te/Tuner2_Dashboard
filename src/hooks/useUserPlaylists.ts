import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";

export async function getDiscordUser(accessToken: string) {
    const response = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch Discord user");
    }

    const user = await response.json();
    return user;
}

const fetchUserPlaylists = async(session: Session) => {
    const user = await getDiscordUser(session.accessToken as string);

    console.log({ user });

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
    return useQuery({
        queryKey: [`user-playlists`],
        queryFn: async() => await fetchUserPlaylists(session as Session),
        enabled: session !== null,
        retryDelay: 2000,
    });
}

export default useUserPlaylists;