import mongoose from "mongoose";

const PlaylistsSchema = new mongoose.Schema({
    ownerId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    songs: {
        type: [String],
    },
});

export default mongoose.models.Playlist || mongoose.model('Playlist', PlaylistsSchema);
