import { Link } from "react-router-dom";
import Item from "../types/Item";
// import '../css/BasicItem.css

interface BasicItemProps {
    item: Item
};

export default function BasicItem ({ item }: BasicItemProps) {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <Link to={`/details/${item.id}`}>details</Link>
        </div>
    )
};