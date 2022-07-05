import { extendTheme } from '@chakra-ui/react'

const lt_theme = extendTheme({
	breakpoints: {
		sm: '320px',
		md: '425px',
		lg: '768px',
		xl: '1024px',
		'2xl': '1440',
	},
	textStyles: {
		notes: {
			fontSize: "18px",
			display: "block",
			color: "#fff",
			fontWeight: "400",
		}
	},
	styles: {
		global: {
			body: {
				fontFamily: "'Prompt', sans-serif",
				color: "white",
				background: "radial-gradient(50% 50% at 50% 50%, rgba(34, 34, 34, 0.85) 0%, #222222 75%)"
				//cursor: "none",
				//overscrollBehavior: "none"
			},/* 
			a: {
				cursor: "none"
			} */
		}
	}
})

/* 
	// These are the default breakpoints
		const breakpoints = {
			sm: '30em',
			md: '48em',
			lg: '62em',
			xl: '80em',
			'2xl': '96em',
		}

		eg from chakra ui:
		const breakpoints = {
			sm: '320px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
			'2xl': '1536px',
		}
*/


/*
.clay {
	background: var(--clay-background, rgba(0, 0, 0, .005));
	border-radius: var(--clay-border-radius, 32px);
	box-shadow:
		var(--clay-shadow-outset, 8px 8px 16px 0 rgba(0, 0, 0, .25)),
		inset var(--clay-shadow-inset-primary, -8px -8px 16px 0 rgba(0, 0, 0, .25)),
		inset var(--clay-shadow-inset-secondary, 8px 8px 16px 0 hsla(0, 0%, 100%, .2))
}

*/

export default lt_theme;
