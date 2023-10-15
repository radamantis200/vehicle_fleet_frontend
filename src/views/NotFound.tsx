import { useRouteError, Link } from "react-router-dom"

type ErrorResponse = {
    data: string;
    status: number;
    statusText: string;
};

const NotFound = () => {
    const error = useRouteError() as ErrorResponse;
    return (
        <>
            <div className="bg-indigo-800 flex items-center justify-center h-screen">
                <div className="bg-slate-500 text-white font-bold rounded-lg border shadow-lg p-10">
                    <h1 className="text-4xl font-black">{error.status}</h1>
                    <h1 className="text-4xl font-black">{error.statusText}</h1>
                    <Link to="/">Back Home</Link>
                </div>
            </div>
        </>
    )
}

export default NotFound