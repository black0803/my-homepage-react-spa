import type { Experience } from "../data/cv.ts";
import { useState } from "react";

interface ExperienceProps {
    experience: Experience[];
}

export function Experience({experience}: ExperienceProps) {
    const [state, setState] = useState<number>(0);
    return (
        <section className="mt-5">
            <h3 className="text-xl font-bold">Work History</h3>
            {experience.length <= 3 && experience.map(job => (
            <div key={job.company} className="mt-4 mb-4 block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group break-words">
                <h4 className="text-lg font-semibold">{job.company} - {job.position}</h4>
                <span>{job.duration}</span>
            </div>
            ))}
            {experience.length > 3 && state === 0 && experience.slice(0,3).map(job => (
            <div key={job.company} className="mt-4 mb-4 block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group break-words">
                <h4 className="text-lg font-semibold">{job.company} - {job.position}</h4>
                <span>{job.duration}</span>
            </div>
            ))}
            {experience.length > 3 && state === 1 && experience.map(job => (
            <div key={job.company} className="mt-4 mb-4 block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group break-words">
                <h4 className="text-lg font-semibold">{job.company} - {job.position}</h4>
                <span>{job.duration}</span>
            </div>
            ))}
            {experience.length > 3 && state === 0 && 
                <button onClick={() => setState(1)}>Show all</button>
            }
            {experience.length > 3 && state === 1 && 
                <button onClick={() => setState(0)}>Show less</button>
            }
      </section>
    )
}