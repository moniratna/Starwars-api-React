import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function FooterPagination(props) {
	const { setFetchedData, pageCount } = props;

	const handlePagination = async (e, value) => {
		const newPage = await axios.get(
			"https://swapi.dev/api/people/?page=" + value
		);
		setFetchedData(newPage.data);
	};
	return (
		<div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
			<Stack spacing={2}>
				<Pagination
					count={Math.ceil(pageCount / 10)}
					size="small"
					onChange={handlePagination}
				/>
			</Stack>
		</div>
	);
}
