"use client"

import BotStatus from "@/components/bot-status/BotStatus";
import BreadNav from "@/components/bread-nav/BreadNav";


export default function GuildsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mt-28 p-0 md:py-5 md:px-10 w-full h-full flex flex-row flex-wrap items-center justify-center md:justify-start gap-5 bg-base-100">
            <BreadNav/>
            <BotStatus absolute/>
            {children}
        </div>
    );
}
