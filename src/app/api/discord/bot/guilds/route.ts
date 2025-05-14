import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  const res = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    },
  });

  const guilds = await res.json();
  return NextResponse.json(guilds);
}
