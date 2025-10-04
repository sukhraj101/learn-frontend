import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Skillcard from "../components/Skillcard";
import TrustedPartners from "../components/TrustedPartners";

function HomePage () {
    return (
        <>
            <section className="heroSection">
                <Container className="custom" sx={{ marginTop: "auto", marginBottom: "3rem", paddingTop: "1rem" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={7.5}>
                            <Typography variant="h2" gutterBottom>
                            <Typography variant="span" gutterBottom>Hi,</Typography> Lorem ipsum dolor sit amet consectetur.</Typography>
                            <Typography variant="body" component="p" gutterBottom sx={{ mb: 0.5, fontWeight: 600  }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor praesentium expedita maiores voluptas sed eum hic magnam doloremque sint, tempore.
                            </Typography>
                            <Typography variant="body" component="p" gutterBottom sx={{ mb: 2.5 }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                            <Box>
                                <Button variant="contained" color="primary" size="large">Start LevelUp Course</Button>
                            </Box>
                        </Grid>
                        <Grid size={4.5}>
                            <Box className="skill-cards">
                                <Skillcard />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <TrustedPartners />
            </section>
        </>
    );
}

export default HomePage