import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
	table: {
		"&:hover": {
			cursor: "pointer",
			transition: "all .2s ease-in-out",
			transform: "scale3d(1.02, 1.05, 1)",
			boxShadow: "0px 1px 5px #aeafb1, 0px -1px 5px #aeafb1",
		},
	},
}));

export default function Body(props) {
	const classes = useStyles();
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const [homeWorld, setHomeWorld] = React.useState(null);
	useEffect(() => {
		let isMounted = true;
		const homeworldname = async () => {
			try {
				const result = await axios.get(row.homeworld);
				if (isMounted) {
					setHomeWorld(result.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		homeworldname();
		return () => {
			isMounted = false;
		};
	});

	return (
		<React.Fragment>
			<TableRow
				sx={{ "& > *": { borderBottom: "unset" } }}
				onClick={() => setOpen(!open)}
				className={classes.table}
				aria-labelledby="table-heading"
			>
				<TableCell>
					<IconButton aria-label="expand row" size="small">
						{row.gender === "n/a" ? (
							<i className="fa-brands fa-android"></i>
						) : row.gender === "male" || row.gender === "female" ? (
							<i className="fa-solid fa-circle-user"></i>
						) : (
							<i class="fa-solid fa-question"></i>
						)}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row" data-testid="name">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.gender}</TableCell>
				<TableCell align="right">{row.birth_year}</TableCell>
				<TableCell align="right">{row.eye_color}</TableCell>
				<TableCell align="right">{row.height}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								History
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Created</TableCell>
										<TableCell>Edited</TableCell>
										<TableCell align="right">Films</TableCell>
										<TableCell align="right">Hair Color</TableCell>
										<TableCell align="right">Home World</TableCell>
										<TableCell align="right">mass</TableCell>
										<TableCell align="right">Skin Color</TableCell>
										<TableCell align="right">Species</TableCell>
										<TableCell align="right">StarShips</TableCell>
										<TableCell align="right">Vehicles</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>{row.created}</TableCell>
										<TableCell>{row.edited}</TableCell>
										<TableCell align="right">{row.films.length}</TableCell>
										<TableCell align="right">{row.hair_color}</TableCell>
										<TableCell align="right">
											{homeWorld && homeWorld.name}
										</TableCell>
										<TableCell align="right">{row.mass}</TableCell>
										<TableCell align="right">{row.skin_color}</TableCell>
										<TableCell align="right">{row.species.length}</TableCell>
										<TableCell align="right">{row.starships.length}</TableCell>
										<TableCell align="right">{row.vehicles.length}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}
Body.propTypes = {
	row: PropTypes.shape({
		height: PropTypes.string.isRequired,
		birth_year: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		eye_color: PropTypes.string.isRequired,
	}).isRequired,
};
