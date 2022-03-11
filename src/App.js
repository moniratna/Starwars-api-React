import "./App.css";
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from "@mui/material/styles";
import { Main } from "./Pages/Main";

function App() {
	let theme = createTheme({
		typography: {
			fontFamily: ['"Titlium Web"', "Open Sans"].join(","),
		},
	});
	theme = responsiveFontSizes(theme);

	return (
		<ThemeProvider theme={theme}>
			<div className="background">
				<Main />
			</div>
		</ThemeProvider>
	);
}

export default App;
