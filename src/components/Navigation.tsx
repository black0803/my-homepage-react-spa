import type { Dispatch, SetStateAction } from "react";

interface NavigationProps {
    setState: Dispatch<SetStateAction<Number>>;
}

export function Navigation({setState}: NavigationProps) {
    return (
        <nav className="portfolio-nav mb-6 flex justify-center gap-8">
            <button className="w-30" onClick={() => setState(0)}>Profile</button>
            <button className="w-30" onClick={() => setState(1)}>Guides</button>
            <button className="w-30" onClick={() => setState(2)}>Blog Feed</button>
        </nav>
    )
}