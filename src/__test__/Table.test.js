import { render, screen } from "@testing-library/react";
import Body from "../Components/TableComponents/Body";
import "@testing-library/jest-dom";
const data = [
	{
		birth_year: "112BBY",
		created: "2014-12-10T15:10:51.357000Z",
		edited: "2014-12-20T21:17:50.309000Z",
		eye_color: "yellow",
		films: [
			"https://swapi.dev/api/films/1/",
			"https://swapi.dev/api/films/2/",
			"https://swapi.dev/api/films/3/",
			"https://swapi.dev/api/films/4/",
			"https://swapi.dev/api/films/5/",
			"https://swapi.dev/api/films/6/",
		],
		gender: "n/a",
		hair_color: "n/a",
		height: "167",
		homeworld: "https://swapi.dev/api/planets/1/",
		mass: "75",
		name: "C-3PO",
		skin_color: "gold",
		species: ["https://swapi.dev/api/species/2/"],
		starships: [],
		url: "https://swapi.dev/api/people/2/",
		vehicles: [],
	},
];
test("renders 10 rows in table", () => {
	const { getByText, getByTestId, rerender, getAllByRole } = render(
		<Body row={data[0]} />
	);
	screen.debug();
	const rows = getAllByRole("row");
	expect(rows.length - 1).toBe(data.length);
});
