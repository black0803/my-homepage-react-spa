interface SkillsProps {
    skills: string[];
}

export function Skills({skills}: SkillsProps) {
    return (<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <h3 className="text-xl font-bold">Core Skills</h3>
        <ul className="text-left">
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    )
}