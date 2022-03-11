import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: "Titillium Web",
	},
}));

export default function TableHeader() {
	const classes = useStyles();
	return (
		<TableRow>
			<TableCell />
			<TableCell className={classes.root}>Name</TableCell>
			<TableCell align="right" className={classes.root}>
				Gender
			</TableCell>
			<TableCell align="right" className={classes.root}>
				Birth Year
			</TableCell>
			<TableCell align="right" className={classes.root}>
				Eye Color
			</TableCell>
			<TableCell align="right" className={classes.root}>
				Height
			</TableCell>
		</TableRow>
	);
}
