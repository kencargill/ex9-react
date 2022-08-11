import { useLocation } from "react-router-dom";
import menu from "../types/MenuItems";
import BasicItem from "./BasicItem";

export default function MenuRoute () {
    const query = new URLSearchParams(useLocation().search);

	let filteredItems = [...menu];

	console.log(filteredItems);
    
	if (query.get("name")) {
		console.log(query.get("name"));
		filteredItems = filteredItems.filter((item) =>
			item.name.toLowerCase().includes(query.get("name")!)
		);
	}
	if (query.get("maxPrice")) {
		console.log(query.get("maxPrice"));
		filteredItems = filteredItems.filter(
			(item) => item.price < parseInt(query.get("maxPrice")!)
		);
	}
	if (query.get("maxCalories")) {
		console.log(query.get("maxCalories"));
		filteredItems = filteredItems.filter(
			(item) => item.calories < parseInt(query.get("maxCalories")!)
		);
	}
	if (query.get("vegetarian") === "true") {
		filteredItems = filteredItems.filter((item) => item.vegetarian);
	}
	if (query.get("vegetarian") === "false") {
		filteredItems = filteredItems.filter((item) => !item.vegetarian);
	}
    return (
        <div>
            {menu.map((item) => (
                <BasicItem item={item} />
            ))}
        </div>
    )
}