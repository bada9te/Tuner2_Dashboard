import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord";

const DISCORD_SCOPES = ['identify'].join(' ');

const handler = NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: { params: { scope: DISCORD_SCOPES } }
        })
    ],
    pages: {
        signIn: "/signin"
    }
});

export { handler as GET, handler as POST }