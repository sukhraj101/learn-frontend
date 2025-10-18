import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import CustomButton from '@/components/Button';
import { useNavigate } from "react-router-dom";
import './hero.scss';

function Herosection() {

    const navigate = useNavigate();
    function hamburgerClick() {
       navigate('/register');
    }

    return (
        <>
            <Box component="section" className="heroSection" sx={{ paddingTop: { xs: '50px', md: '70px', lg: "0px" }, paddingBottom: { xs: '50px', md: '70px', lg: "0px" } }}>
                <Container className="custom">
                    <Grid container rowSpacing={{ xs: 4, sm: 4, md: 6, lg: 6 }} columnSpacing={{ xs: 3, sm: 3, md: 3 }} sx={{ alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6, lg: 7 }}>
                            <Typography variant="h1" gutterBottom sx={{
                                fontSize: {
                                xs: '2rem',  // mobile
                                sm: '2.2rem',  // tablet
                                md: '2.6rem',  // desktop
                                lg: '3.6rem',  // desktop large
                                },
                                mb: 1
                            }}>
                                Join the <Typography variant="span">&nbsp;Lycronix&nbsp;</Typography> community to upskill
                            </Typography>
                            <Typography variant="body" component="p" gutterBottom sx={{ mb: 3, fontWeight: 600  }}>
                                Lycronix — a vibrant learning hub where you can master modern web technologies like React, JavaScript, Next.js, Node.js, and shadcnUI, all for free.
                            </Typography>
                            <Box>
                                <CustomButton variant="contained" color="primary" size="large" onClick={() => hamburgerClick()}>Register now</CustomButton>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                            <img src={'/hero-right-1.png'} alt="" style={{ maxWidth: '100%', display: 'block' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Herosection;