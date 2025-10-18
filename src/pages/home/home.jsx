import React from "react";
import Herosection from "../../components/sections/hero/hero";
import { Box, Container, Typography } from "@mui/material";
import SkillsGrid from "../../components/sections/skills-grid/skills-grid";
import { useTheme } from '@mui/material/styles';
import './home.scss';


function HomePage () {
    const theme = useTheme();
    return (
        <>
            <Herosection />
            <Box component="section" className="home__section2" sx={{ backgroundColor: theme.palette.white.contrastText, paddingTop: { xs: '50px', md: '70px', lg: "100px" }, paddingBottom: { xs: '50px', md: '70px', lg: "100px" } }}>
                <Container className="custom">
                    <div className="box"></div>
                    <Typography variant="body" component="h2" color="primary.contrastText" className="sec__heading">Built for everyone</Typography>
                    <Typography variant="body" component="p" color="primary.contrastText" sx={{ maxWidth: '360px', textAlign: 'center', marginInline: 'auto' }}>Thousands of learners worldwide, use Lycronix to upskill themselves.</Typography>
                    <SkillsGrid />
                </Container>
            </Box>
        </>
    );
}

export default HomePage