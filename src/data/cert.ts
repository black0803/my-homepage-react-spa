export type cert = {
    name: string;
    issuer: string;
    issued_date: string;
    expired_date: string;
};

export const certs: cert[] = [
    {
        name: "AWS Certified Solutions Architect – Professional",
        issuer: "Amazon Web Services",
        issued_date: "July 2025",
        expired_date: "July 2028",
    },
    {
        name: "Red Hat Certified System Administrator (RHCSA)",
        issuer: "Red Hat",
        issued_date: "January 2025",
        expired_date: "January 2028", 
    },
    {
        name: "AWS Certified SysOps Administrator – Associate",
        issuer: "Amazon Web Services",
        issued_date: "October 2023",
        expired_date: "October 2026",
    },
    {
        name: "HashiCorp Certified: Terraform Associate",
        issuer: "HashiCorp",
        issued_date: "April 2023",
        expired_date: "March 2027",
    },
    {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        issued_date: "July 2022",
        expired_date: "July 2028",
    }
];