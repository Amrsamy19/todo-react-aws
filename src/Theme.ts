import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export enum Theme {
	DARK = "dark",
	LIGHT = "light",
}

const lightTheme = createTheme({
	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: grey[600],
		},
	},
});

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: grey[900],
		},
		secondary: {
			main: grey[50],
		},
	},
});

const themes = {
	[Theme.DARK]: darkTheme,
	[Theme.LIGHT]: lightTheme,
};

export const getTheme = (theme: Theme) => {
	return themes[theme];
};
