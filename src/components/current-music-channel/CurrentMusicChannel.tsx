export type TChannelData = {
    id: string;
    guild_id: string;
    type: number;
    name: string;
}

export default function CurrentMusicChannel({ data }: { data: TChannelData[] }) {
    const handleChannelClick = (id: string, guild_id: string) => {
        console.log({id, guild_id});
    }

    return (
        <ul className="list bg-base-200 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Current music channel</li>
            
            <li className="list-row">
                <div>
                    <div>{data[0].name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Change it here:</div>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 btn-primary">Change</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            data.filter(c => c.type == 0).map((channel, key) => {
                                return (
                                    <li 
                                        key={key} 
                                        onClick={() => handleChannelClick(channel.id, channel.guild_id)}
                                    >
                                        <a>{channel.name}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </li>
        </ul>
    );
}