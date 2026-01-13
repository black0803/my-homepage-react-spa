export type Experience = {
    company: string;
    position: string;
    duration: string;
}
export type cvData =  {
    name: string;
    role: string;
    skills: string[];
    experience: Experience[];
}
export const cv: cvData = {
    name: "Nobel Edgar",
    role: "Cloud Engineer",
    skills: [
        "AWS",
        "Terraform",
        "Kubernetes",
        "Linux",
        "Docker",
        "Python"
    ],
    experience: [
        {
            company: "PT Mastersystem Infotama Tbk",
            position: "Cloud Engineer",
            duration: "November 2022 - Present",
        },
        {
            company: "PT Mastersystem Infotama Tbk",
            position: "Junior Cloud Engineer",
            duration: "February 2022 - November 2022",
        }
    ]
};