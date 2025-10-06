import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Skillcard from "../components/Skillcard";
import TrustedPartners from "../components/TrustedPartners";

function HomePage () {
    return (
        <>
            <section className="heroSection">
                <Container className="custom" sx={{ marginTop: "auto", marginBottom: "3rem", paddingTop: "1rem" }}>
                    <Grid container rowSpacing={{ xs: 4, sm: 4, md: 6, lg: 6 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
                            <Typography variant="h2" gutterBottom sx={{
                                fontSize: {
                                xs: '1.8rem',  // mobile
                                sm: '1.8rem',  // tablet
                                md: '2.5rem',  // desktop
                                lg: '3.5rem',  // desktop large
                                },
                            }}>
                                <Typography variant="span" gutterBottom>Hi,</Typography> Lorem ipsum dolor sit amet consectetur.
                            </Typography>
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
                        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
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