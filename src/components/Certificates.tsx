import type { cert } from "../data/cert.ts";

interface CertificatesProps {
    certs: cert[];
}

export function Certificates({certs}: CertificatesProps) {
    return (
        <section className="mt-5 mb-5">
            <h3 className="text-xl font-bold mb-4">Certificates</h3>
            {certs.map(cert => (
            
            <div key={cert.name} className="mt-4 mb-4 block p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 group">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                    {cert.name}
                </h4>
                <p className="text-sm text-slate-400" >
                    Issued by: {cert.issuer} | Issued Date: {cert.issued_date} | Expired Date: {cert.expired_date}
                </p>
            </div>
            ))}
      </section>
    )
}