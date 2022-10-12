import React from "react";
import { Paper, Stack, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, LinkedIn, MailOutline, PhoneAndroid, Twitter } from "@mui/icons-material/";

const Footer = () => {
	return (
		<Grid container maxWidth="xl">
			<Grid item xs={11} sx={{ m: "auto", mt: 2 }}>
				<Paper elevation={2}>
					<Stack direction="row" sx={{ m: "auto", width: 1 / 1 }}>
						<a href="mailto:todor.matthew.john@gmail.com" target="_blank" rel="noreferrer">
							<IconButton name="Email" aria-label="email">
								<MailOutline color="primary" />
							</IconButton>
						</a>
						<a href="https://github.com/Ccatalyst" target="_blank" rel="noreferrer">
							<IconButton name="Github" aria-label="github">
								<GitHub color="primary" />
							</IconButton>
						</a>

						<a href="https://www.linkedin.com/in/matthew-todor-a9185062/" target="_blank" rel="noreferrer">
							<IconButton name="LinkedIn" aria-label="linkedin">
								<LinkedIn color="primary" />
							</IconButton>
						</a>
						<a href="https://twitter.com/Ccatalysttt" target="_blank" rel="noreferrer">
							<IconButton name="Twitter" aria-label="twitter">
								<Twitter color="primary" />
							</IconButton>
						</a>
						<a href="tel:303-489-5742">
							<IconButton name="Phone" aria-label="phone">
								<PhoneAndroid color="primary" />
							</IconButton>
						</a>
					</Stack>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Footer;