import { FormEvent, useState } from "react";
// import { useHistory } from "react-router-dom"; // useHistory no longer supported or something
// import "./SearchRoute.css";

const SearchRoute = () => {
	const [name, setName] = useState<string>("");
	const [maxPrice, setMaxPrice] = useState<number>(15);
	const [vegetarian, setVegetarian] = useState<string | null>(null);
	const [maxCalories, setMaxCalories] = useState<number>(1500);
	// const history = useHistory();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const queryStringParams: any = {};
		if (maxPrice) {
			queryStringParams.maxPrice = maxPrice;
		}
		if (maxCalories) {
			queryStringParams.maxCalories = maxCalories;
		}
		if (vegetarian) {
			queryStringParams.vegetarian = vegetarian;
		}
		if (name) {
			queryStringParams.name = name;
		}
		// history.push("/?" + new URLSearchParams(queryStringParams).toString());
	};

	return (
		<div className="SearchRoute">
			<h2>Filter results by filling out one or more fields</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="range"
						id="maxPrice"
						name="maxPrice"
						min="5"
						max="15"
						value={maxPrice}
						onChange={(e) => setMaxPrice(parseInt(e.target.value))}
						step="1"
					/>
					<label htmlFor="maxPrice">Max Price (${maxPrice})</label>
				</div>
				<div>
					<input
						type="range"
						id="maxCalories"
						name="maxCalories"
						min="500"
						max="1500"
						value={maxCalories}
						onChange={(e) => setMaxCalories(parseInt(e.target.value))}
						step="100"
					/>
					<label htmlFor="maxCalories">Max Calories ({maxCalories})</label>
				</div>
				<div>
					<p>Vegetarian</p>
					<div>
						<input
							type="radio"
							name="vegetarian"
							id="vegetarian"
							value="true"
							checked={vegetarian === "true"}
							onChange={() => setVegetarian("true")}
						/>
						<label htmlFor="vegetarian">Yes</label>
					</div>
					<div>
						<input
							type="radio"
							name="vegetarian"
							id="nonVegetarian"
							value="false"
							checked={vegetarian === "false"}
							onChange={() => setVegetarian("false")}
						/>
						<label htmlFor="nonVegetarian">No</label>
					</div>
				</div>
				<div>
					<label htmlFor="name">Name</label>
					<div>
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<button>Filter</button>
			</form>
		</div>
	);
};

export default SearchRoute;
