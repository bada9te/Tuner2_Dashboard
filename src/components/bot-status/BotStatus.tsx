export default function BotStatus({ absolute }: { absolute?: boolean }) {
    return (
        <div className={absolute ? 'fixed bottom-5 right-5 bg-base-100 border-[2px] md:border-0 z-50 p-1 px-2 shadow-2xl rounded-3xl' : ''}>
            <div className="inline-grid *:[grid-area:1/1]">
                <div className="status status-success animate-ping"></div>
                <div className="status status-success"></div>
            </div> <span className="drop-shadow-2xl">Bot is online</span>
        </div>
    );
}