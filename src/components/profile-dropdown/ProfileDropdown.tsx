import { LogOut, PowerOff, Server } from "lucide-react";

export default function ProfileDropDown({ isOpen }: { isOpen: boolean }) {
    return (
        <div 
            className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 absolute top-14 right-0 flex flex-col justify-center items-center bg-base-300 p-1 rounded-3xl shadow-2xl w-44 gap-1`}
        >
            <button className="btn w-full rounded-none rounded-t-[22px] flex items-center justify-center p-2 gap-2 text-start">
                <Server size={20}/> Servers
            </button>

            <button className="btn w-full rounded-none rounded-b-[22px] flex items-center justify-center p-2 gap-2 text-red-400 text-start">
                <LogOut size={20}/> Logout
            </button>

        </div>
    );
}
