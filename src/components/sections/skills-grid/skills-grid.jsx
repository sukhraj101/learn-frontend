import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import './skills-grid.scss';

function SkillsGrid() {
    return (
        <>
            {/* JavaScript Beyond the Browser */}
            <Grid container rowSpacing={{ xs: 1.5, sm: 3, md: 3, lg: 3 }} columnSpacing={{ xs: 1.5, sm: 3, md: 3, lg: 3 }} sx={{ maxWidth: '800px', marginInline: 'auto', marginBlockStart: { xs: '35px', md: '70px' } }}>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/react.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            React.js
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Heart of the Frontend Development
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/next">
                        <Box className="skill__grid_icon">
                            <img src="/react.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            Next.js
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Server-Side React  Made Easy
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/javascript.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            JavaScript
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Engine of Web Interactivity
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/html.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            HTML
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Markup That Builds Structure
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/css.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            CSS
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Artistry Behind Web Layouts
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/react.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            Node.js
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Fast, Scalable Web Backend
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/react.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            TypeScript
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            JavaScript with Type Safety
                        </Typography>
                    </Link>
                </Grid>
                <Grid item size={{ xs: 6, sm: 4, md: 3, lg: 3 }} className="skill__grid_item">
                    <Link to="/react">
                        <Box className="skill__grid_icon">
                            <img src="/react.svg" alt="react" />
                        </Box>
                        <Typography variant="h3" className="skill__grid_title">
                            Vue.js
                        </Typography>
                        <Typography variant="body" component="p" sx={{ fontSize: '12px', textAlign: 'center', lineHeight: 1.22, color: "#fff", marginTop: 1 }}>
                            Progressive Framework for Interfaces
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default SkillsGrid;