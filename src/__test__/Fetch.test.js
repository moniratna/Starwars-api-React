import React from "react";
import ReactDOM from "react-dom";
import TableMain from "../Components/TableComponents/TableMain";
import {
	act,
	render,
	fireEvent,
	cleanup,
	waitForElement,
} from "@testing-library/react";

import axiosMock from "axios";
import Body from "../Components/TableComponents/Body";

afterEach(cleanup);

it("Async axios request works", async () => {
	axiosMock.get.mockResolvedValue({
		data: [
			{
				name: "Luke Skywalker",
				height: "172",
				mass: "77",
				hair_color: "blond",
				skin_color: "fair",
				eye_color: "blue",
				birth_year: "19BBY",
				gender: "male",
				homeworld: "https://swapi.dev/api/planets/1/",
				films: [
					"https://swapi.dev/api/films/2/",
					"https://swapi.dev/api/films/6/",
					"https://swapi.dev/api/films/3/",
					"https://swapi.dev/api/films/1/",
					"https://swapi.dev/api/films/7/",
				],
				species: ["https://swapi.dev/api/species/1/"],
				vehicles: [
					"https://swapi.dev/api/vehicles/14/",
					"https://swapi.dev/api/vehicles/30/",
				],
				starships: [
					"https://swapi.dev/api/starships/12/",
					"https://swapi.dev/api/starships/22/",
				],
				created: "2014-12-09T13:50:51.644000Z",
				edited: "2014-12-20T21:17:56.891000Z",
				url: "https://swapi.dev/api/people/1/",
			},
		],
	});
	const row = {
		name: "Luke Skywalker",
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		homeworld: "https://swapi.dev/api/planets/1/",
		films: [
			"https://swapi.dev/api/films/2/",
			"https://swapi.dev/api/films/6/",
			"https://swapi.dev/api/films/3/",
			"https://swapi.dev/api/films/1/",
			"https://swapi.dev/api/films/7/",
		],
		species: ["https://swapi.dev/api/species/1/"],
		vehicles: [
			"https://swapi.dev/api/vehicles/14/",
			"https://swapi.dev/api/vehicles/30/",
		],
		starships: [
			"https://swapi.dev/api/starships/12/",
			"https://swapi.dev/api/starships/22/",
		],
		created: "2014-12-09T13:50:51.644000Z",
		edited: "2014-12-20T21:17:56.891000Z",
		url: "https://swapi.dev/api/people/1/",
	};

	const url = "https://swapi.dev/api/people/";
	const { getByText, getByTestId, rerender } = render(<Body row={row} />);

	//   expect(getByText(/...Loading/i).textContent).toBe("...Loading")

	const resolvedEl = getByTestId("name");

	expect(resolvedEl.textContent).toBe("Luke Skywalker");

	//   expect(axiosMock.get).toHaveBeenCalledTimes(1);
	//   expect(axiosMock.get).toHaveBeenCalledWith(url);
});
