import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SearchBar from "../SearchBarComponent/SearchBar";

export default function PrimaryAppBar(props) {
	const {
		setFetchedData,
		handleSort,
		setShowCard,
		showCard,
		setSearchLoading,
	} = props;
	const cardHandle = () => {
		setShowCard(!showCard);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar style={{ background: "white" }} position="static">
				<Toolbar>
					<SearchBar
						setFetchedData={setFetchedData}
						setSearchLoading={setSearchLoading}
					/>
					<Button
						sx={{ display: { xs: "none", sm: "block" }, marginRight: "5%" }}
						size="small"
						variant="outlined"
						onClick={cardHandle}
					>
						{showCard ? "Show Table" : "Show Card"}
					</Button>
					<Box style={{ display: "flex" }}>
						<Typography
							variant="h6"
							noWrap
							component="div"
							style={{
								color: "black",
								justifyContent: "center",
								textAlign: "center",
							}}
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							Star Wars Characters
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { md: "flex" } }}>
						{showCard ? null : (
							<Button size="small" variant="outlined" onClick={handleSort}>
								Sort
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
