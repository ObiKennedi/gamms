import { InfinityIcon } from "lucide-react";
import "../styles/ValueProps.scss"

const ValuePropsItems = [
    { id: 1, title: "100%", feature: "Data ownership" },
    { id: 2, title: "24/7", feature: "Uptime Guaranteed" },
    { id: 3, title: "100%", feature: "Free and accessible" },
    { id: 4, title: <InfinityIcon size={35}/>, feature: "Possibilities" },
];

export const ValueProps = () => {
    return (
        <div className="value-props">
            {ValuePropsItems.map((item) =>{
                return(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.feature}</p>
                    </div>
                )
            })}
        </div>
    );
};
