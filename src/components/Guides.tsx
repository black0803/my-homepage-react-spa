import type { guide } from "../data/guides.ts";

interface GuidesProps {
    guides: guide[];
}

export function Guides({guides}: GuidesProps) {
    let count = 0;
    return (
        <section className="mt-5 mb-5">
            <h3 className="text-xl font-bold">Guides</h3>
            {guides.map(guide => (
            
            <div key={guide.title}>
                <a href={guide.link} className="text-blue-500 hover:underline">{++count}. {guide.title}</a>
            </div>
            ))}
      </section>
    )
}