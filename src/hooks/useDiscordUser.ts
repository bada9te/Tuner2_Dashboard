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

const fetchUser = async(session: Session) => {
    const user = await getDiscordUser(session.accessToken as string);

    console.log({ user });

    if (!user) {
        throw new Error("No discord user found at api");
    }

    return user;
}

const useDiscordUser = (session: Session | null) => {
    return useQuery({
        queryKey: [`user`],
        queryFn: async() => await fetchUser(session as Session),
        enabled: session !== null,
        retryDelay: 2000,
    });
}

export default useDiscordUser;