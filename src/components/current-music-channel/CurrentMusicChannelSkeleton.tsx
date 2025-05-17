
export default function CurrentMusicChannelSkeleton() {
    return (
        <ul className="list bg-base-200 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Current music channel</li>
            
            <li className="list-row">
                <div>
                    <div className="skeleton h-6 w-28 mb-1.5"></div>
                    <div className="skeleton h-4 w-32"></div>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary skeleton bg-green-700 w-[85px] rounded-3xl"></button>

                    <ul tabIndex={0} className="dropdown-content menu bg-neutral rounded-box z-1 w-52 p-2 shadow-sm">
                       
                    </ul>
                </div>
            </li>
        </ul>
    );
}