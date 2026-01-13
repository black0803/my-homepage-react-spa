import type { Experience } from "../data/cv.ts";

interface ExperienceProps {
    experience: Experience[];
}

export function Experience({experience}: ExperienceProps) {
    return (
        <section>
            <h3 className="text-xl font-bold">Work History</h3>
            {experience.map(job => (
            <div key={job.company}>
                <h4 className="text-lg font-semibold">{job.company} - {job.position}</h4>
                <span>{job.duration}</span>
            </div>
            ))}
      </section>
    )
}