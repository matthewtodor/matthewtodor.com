import { React, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Algorithms from "./components/pages/algorithms";
import Resume from "./components/pages/resume";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#0E9594",
		},
		secondary: {
			main: "#F1FEC6",
		},
		error: {
			main: "#ED6A5A",
		},
		warning: {
			main: "#EAF27C",
		},
		info: {
			main: "#3ABEFF",
		},
		success: {
			main: "#37FF8B",
		},
	},
});

function App() {
	const particlesInit = useCallback((main) => {
		loadFull(main);
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className="page-container">
					<Nav />
					<Particles options={particlesOptions} init={particlesInit} />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/algorithms" element={<Algorithms />} />
						<Route path="/resume" element={<Resume />} />
					</Routes>
				</div>

				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
