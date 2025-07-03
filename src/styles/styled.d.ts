import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			background: string;
			text: string;
			accent1: string;
			accent2: string;
		};
		fonts: {
			main: string;
			heading: string;
		};
		breakpoints: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
	}
}
