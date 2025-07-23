import dbConnect from "@/lib/mongo/init";
import Playlist from "@/lib/mongo/schemas/playlist";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const playlist = await Playlist.create(await req.json());
        return NextResponse.json({ ok: true, playlist }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ ok: false }, { status: 400 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await dbConnect();
        const ownerId = req.headers.get("owner_id");
        const playlists = await Playlist.find({ ownerId });
        return NextResponse.json({ ok: true, playlists }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ ok: false }, { status: 400 });
    }
}