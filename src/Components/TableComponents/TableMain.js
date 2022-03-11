import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableHeader from "./TableHeader";
import Body from "./Body";
import axios from "axios";
import FooterPagination from "../FooterComponent/FooterPagination";
import CardMain from "../CardComponents/CardMain";
import PrimaryAppBar from "../AppBarComponent/PrimaryAppBar";
import Loader from "../LoaderComponent/Loader";

export default function TableMain() {
	const [fetchedData, setFetchedData] = React.useState(null);
	const [sortedData, setSortedData] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [showCard, setShowCard] = React.useState(false);
	const [allData, setAllData] = React.useState(null);
	const [searchLoading, setSearchLoading] = React.useState(false);

	useEffect(() => {
		let isMounted = true;
		// fetching table data

		const fetchData = async () => {
			setLoading(true);
			try {
				const result = await axios.get("https://swapi.dev/api/people/");
				setFetchedData(result.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();

		const getAllStarwarsPeople = () => {
			let people = [];
			// first page
			return axios
				.get("https://swapi.dev/api/people/")
				.then((response) => {
					// collect people from first page
					people = response.data.results;
					return response.data.count;
				})
				.then((count) => {
					// exclude the first request
					const numberOfPagesLeft = Math.ceil((count - 1) / 10);
					let promises = [];
					// start at 2 as you already queried the first page
					for (let i = 2; i <= numberOfPagesLeft; i++) {
						promises.push(axios.get(`https://swapi.dev/api/people?page=${i}`));
					}
					return Promise.all(promises);
				})
				.then((response) => {
					//get the rest records - pages 2 through n.
					people = response.reduce(
						(acc, data) => [...acc, ...data.data.results],
						people
					);
					return people;
				})
				.catch((error) => console.log("Properly handle your exception here"));
		};
		const fetchAllData = async () => {
			try {
				const starwarsPeople = await getAllStarwarsPeople();
				console.log("starwarsPeople", starwarsPeople);
				if (isMounted) {
					setAllData(starwarsPeople);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllData();
		return () => {
			isMounted = false;
		};
	}, []);

	const handleSort = () => {
		fetchedData.results.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		setSortedData(fetchedData.results);
	};

	return (
		<>
			<PrimaryAppBar
				setFetchedData={setFetchedData}
				handleSort={handleSort}
				setShowCard={setShowCard}
				showCard={showCard}
				setSearchLoading={setSearchLoading}
			/>
			{showCard ? (
				<CardMain allData={allData} />
			) : (
				<>
					<Paper sx={{ width: "100%" }}>
						<TableContainer sx={{ maxHeight: 440 }}>
							<Table aria-label="collapsible table">
								<TableHead>
									<TableHeader />
								</TableHead>
								<TableBody role="list">
									{loading
										? null
										: fetchedData &&
										  fetchedData.results.map((row) => (
												<Body key={row.name} row={row} />
										  ))}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
					{loading ? (
						<Loader clsName="fas fa-exclamation-circle fa-lg" />
					) : null}
					{searchLoading ? (
						<Loader clsName="fa-solid fa-spinner fa-lg" />
					) : null}
					{fetchedData && fetchedData.results.length === 0 ? (
						<Loader clsName="fa-solid fa-triangle-exclamation fa-lg" />
					) : null}
					<FooterPagination
						setFetchedData={setFetchedData}
						pageCount={fetchedData && fetchedData.count}
					/>
				</>
			)}
		</>
	);
}
