import * as React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";

export default function CardMain(props) {
	const { allData } = props;
	console.log("fron Card", allData);
	const filterHuman =
		allData &&
		allData.filter(
			(data) => data.gender === "male" || data.gender === "female"
		);
	const filterDroid =
		allData && allData.filter((data) => data.gender === "n/a");
	const filterOther =
		allData &&
		allData.filter(
			(data) => data.gender === "hermaphrodite" || data.gender === "none"
		);
	console.log("human filter", filterOther);
	return (
		<Grid container spacing={2}>
			<Grid item xs={3} md={3}>
				<CardComponent count={allData && allData.length} title={"All Data"} />
			</Grid>
			<Grid item xs={3} md={3}>
				<CardComponent
					count={filterHuman && filterHuman.length}
					title={"Human"}
				/>
			</Grid>
			<Grid item xs={3} md={3}>
				<CardComponent
					count={filterDroid && filterDroid.length}
					title={"droid"}
				/>
			</Grid>
			<Grid item xs={3} md={3}>
				<CardComponent
					count={filterOther && filterOther.length}
					title={"Others"}
				/>
			</Grid>
		</Grid>
	);
}
