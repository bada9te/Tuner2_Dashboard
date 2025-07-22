import dbConnect from "@/lib/mongo/init";
import Playlist from "@/lib/mongo/schemas/playlist";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();
        const id = req.headers.get('playlist_id');

        if (!req.body || !id) {
            throw new Error("No body or playlist id");
        }

        const playlist = await Playlist.findByIdAndUpdate(
            id, req.body, { new: true, runValidators: true }
        );

        return NextResponse.json({ ok: true, playlist }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ ok: false, error }, { status: 400 });
    } 
}

export async function DELETE(req: NextRequest) {
    try {
        await dbConnect();
        const id = req.headers.get('playlist_id');
        
        if (!id) {
            throw new Error("No id");
        }

        const playlist = await Playlist.findByIdAndDelete(
            id
        );

        return NextResponse.json({ ok: true, playlist }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ ok: false, error }, { status: 400 });
    }
}