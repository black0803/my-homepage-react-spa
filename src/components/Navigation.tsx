import type { Dispatch, SetStateAction } from "react";

interface NavigationProps {
    setState: Dispatch<SetStateAction<number>>;
}

export function Navigation({setState}: NavigationProps) {
    return (
        <nav className="portfolio-nav mb-6 flex justify-center gap-2 w-full">
            <button className="flex-1 py-2 bg-slate-100 rounded text-sm"onClick={() => setState(0)}>Profile</button>
            <button className="flex-1 py-2 bg-slate-100 rounded text-sm" onClick={() => setState(1)}>Guides</button>
            <button className="flex-1 py-2 bg-slate-100 rounded text-sm" onClick={() => setState(2)}>Blog Feed</button>
        </nav>
    )
}