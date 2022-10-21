import React from "react";
import AboutMe from "./aboutme";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FingerPrintMark from "./fingerprint";

const Home = () => {
	return (
		<Grid container>
			<Grid item xs={11} md={11} sx={{ m: "auto", mt: { xs: 2, sm: 6 } }}>
				<AboutMe />
			</Grid>
			<Grid item xs={11} md={11} sx={{ m: "auto", mt: { xs: 2 }, mb: { xs: 2, sm: 6 } }}>
				<FingerPrintMark />
			</Grid>
		</Grid>
	);
};

export default Home;
