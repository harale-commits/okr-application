import {DotLoader} from "react-spinners";

export function LoadingIndicator() {
    return <div className="mx-auto max-w-3xl border px-4 py-2 flex-grow space-y-8 flex items-center justify-center">
        <div className="space-y-4">
            <DotLoader/>
            <p>Loading ...</p>
        </div>
    </div>;
}