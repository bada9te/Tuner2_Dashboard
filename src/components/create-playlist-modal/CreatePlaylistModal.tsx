import useDiscordUser from "@/hooks/useDiscordUser";
import { PackagePlus } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string;
    color: string;
}

export default function CreatePlaylistModal() {
    const { data: session } = useSession();
    const { data: user } = useDiscordUser(session);

    const ref = useRef<null | HTMLDivElement>(null);
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log({data})
        if (!user) {
            return;
        }

        try {
            await fetch("/api/data/playlists", {
                method: "POST",
                body: JSON.stringify({
                    ownerId: user.id as string,
                    name: data.title,
                    color: data.color,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="mb-1 w-full h-24 btn btn-ghost border-dashed border-2 border-primary hover:bg-base-200 rounded-2xl">
                <PackagePlus/> New Playlist
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div ref={ref} className="modal" role="dialog">
                <div className="modal-box">
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-lg font-bold">New playlist</h3>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend pt-4">Playlist title</legend>
                            <input 
                                type="text" 
                                className="input w-full" 
                                placeholder="Type here" 
                                {
                                    ...register("title", { 
                                        required: { value: true, message: "Title is required" },
                                        minLength: { value: 1, message: "Min length must be 1" }
                                    })
                                }
                            />
                            <p className="label">Required</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend pt-4">Color</legend>
                            <input
                                defaultValue={"#228B22"}
                                type="color"
                                className="h-10 w-full mb-4 border-0"
                                {...register("color")}
                            />
                        </fieldset>
                        <button type="submit" className="btn btn-soft btn-primary w-full">Create</button>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </>
    );
}