export default function BotCommand({
    title, description, parameters
}: {
    title: string, description: string, parameters?: Map<string, string>
}) {
    return (
        <div className="card bg-primary text-primary-content w-80 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title text-gray-300">{title}</h2>
                <p>{description}</p>
                
                {
                    parameters?.size ?
                    <>
                        <p className="font-bold">Parameters:</p>
                        {
                            [...parameters.entries().map(([key, value], index) => {
                                return (
                                    <div className="badge badge-neutral" key={index}>
                                        {`${key}: ${value}`}
                                    </div>
                                );
                            })]
                        }
                    </> : null
                }
            </div>
        </div>
    );
}