import type {contact} from "../data/links.ts";
import * as Icons from "lucide-react"
interface ContactProps {
    items: contact[];
}
export function Contacts({items}: ContactProps) {
    return (
        <section>
            <h3 className="text-xl font-bold">Links & Contacts</h3>
            <br></br>
            <div  className="flex flex-wrap items-center gap-4 justify-center">
                {
                    items.map(item => {
                        const IconComponent = (Icons as any)[item.logo];
                        return (
                        <div key={item.link} >
                            <a href={item.link}>
                                {item.local ? 
                                (<img src={item.logo} alt={item.link} />) : (IconComponent && <IconComponent size={30} />)}</a>
                        </div>
                        );
                    })
                }
            </div>
      </section>
    );
}