import NextAuth, { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";

const DISCORD_SCOPES = ["identify", "guilds", "email"].join(" ");

export const authOptions: NextAuthOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            authorization: { params: { scope: DISCORD_SCOPES } },
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // @ts-ignore
            session.accessToken = token.accessToken;
            return session;
        },
    },
    pages: {
        signIn: "/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
