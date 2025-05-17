import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
    const GUILD_ID = req.headers.get('guild_id');

    const res = await fetch(`https://discord.com/api/guilds/${GUILD_ID}/channels`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
    });

    const guilds = await res.json();
    return NextResponse.json(guilds);
}
