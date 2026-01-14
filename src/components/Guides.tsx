import type { guide } from "../data/guides.ts";

interface GuidesProps {
    guides: guide[];
}

export function Guides({guides}: GuidesProps) {
    let count = 0;
    return (
        <section className="mt-5 mb-5">
            <h3 className="text-xl font-bold mb-4">Guides</h3>
            {guides.map(guide => (
            
            <div key={guide.title} className="space-y-4 mb-4 mt-4">
                <a href={guide.link} 
                className="block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600">
                        {++count}.&nbsp;&nbsp;&nbsp; {guide.title}
                    </h4>
                </a>
            </div>
            ))}
      </section>
    )
}