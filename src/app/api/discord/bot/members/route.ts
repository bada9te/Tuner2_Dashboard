import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
    const GUILD_ID = req.headers.get('guild_id');
    console.log({GUILD_ID})
    const res = await fetch(`https://discord.com/api/guilds/${GUILD_ID}/members?limit=10`, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
    });


    const members = await res.json();

    return NextResponse.json(members);
}
