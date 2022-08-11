import { useParams } from "react-router-dom";
import Item from "../types/Item";
import menu from "../types/MenuItems";

type RouteParams = {
    id: string;
}

export default function DetailsRoute () {
    const { id } = useParams<RouteParams>();
    const foundItem: Item | undefined = menu.find((item) => item.id === id)
    return (
		<div className="DetailsRoute">
			<p>Name: {foundItem?.name}</p>
			<p>Calories: {foundItem?.calories}</p>
			<p>Description: {foundItem?.description}</p>
			<p>Vegetarian: {foundItem?.vegetarian ? "yes" : "no"}</p>
			<p>Price: ${foundItem?.price}</p>
		</div>
	);
}