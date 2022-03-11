import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardComponent(props) {
	const { count, title } = props;
	return (
		<Card
			sx={{ minWidth: 275 }}
			style={{
				alignItems: "center",
				justifyContent: "center",
				width: "10%",
				height: "100%",
				marginTop: "2%",
				marginLeft: "2%",
				borderRadius: "10px",
				boxShadow: "5px 5px 10px #3ABFE0",
				overflowX: "auto",
			}}
		>
			<CardContent>
				{title === "All Data" ? <i className="fa-solid fa-user"></i> : null}
				{title === "Human" ? <i className="fa-solid fa-circle-user"></i> : null}
				{title === "droid" ? <i className="fa-brands fa-android"></i> : null}
				{title === "Others" ? <i className="fa-solid fa-question"></i> : null}
				<Typography
					sx={{ fontSize: 14, fontFamily: "Titlium Web" }}
					color="text.secondary"
					gutterBottom
				>
					{title}
				</Typography>
				<Typography
					style={{ fontFamily: "Titlium Web" }}
					variant="h5"
					component="div"
				>
					{count}
				</Typography>
			</CardContent>
		</Card>
	);
}
