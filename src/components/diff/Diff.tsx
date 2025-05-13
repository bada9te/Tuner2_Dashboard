export default function Diff() {
    return (
        <figure className="diff h-full" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
                TUNER2
                </div>
            </div>
            <div className="diff-item-2" role="img">
                <div className="bg-base-200 grid place-content-center text-9xl font-black">TUNER2</div>
            </div>
            <div className="diff-resizer"></div>
        </figure>
    );
}