import React from "react";
import { Card } from "@mui/material";
import TableMain from "../Components/TableComponents/TableMain";

export const Main = () => {
	return (
		<>
			<Card
				style={{
					alignItems: "center",
					justifyContent: "center",
					width: "80%",
					height: "80%",
					margin: "auto",
					borderRadius: "10px",
					boxShadow: "5px 5px 10px #3ABFE0",
					overflowX: "auto",
				}}
			>
				<TableMain />
			</Card>
		</>
	);
};
