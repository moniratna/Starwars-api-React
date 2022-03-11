import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IconButton } from "@mui/material";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: "#FFDDEE",
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "black",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function SearchBar(props) {
	const { setFetchedData, setSearchLoading } = props;
	const [localSearchInput, setLocalSearchInput] = React.useState("");
	const onSubmit = async (e) => {
		setSearchLoading(true);
		e.preventDefault();
		const response = await axios.get(
			"https://swapi.dev/api/people/?search=" + localSearchInput
		);
		setFetchedData(response.data);
		setSearchLoading(false);
	};
	const clearSearch = () => {
		setLocalSearchInput("");
		window.location.reload();
	};
	return (
		<>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<form onSubmit={onSubmit}>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
						onChange={(e) => setLocalSearchInput(e.target.value)}
					/>
				</form>
			</Search>
			{localSearchInput !== "" ? (
				<IconButton onClick={clearSearch}>
					<ClearOutlinedIcon color="primary" />
				</IconButton>
			) : null}
		</>
	);
}
