import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import CustomizedAccordions from "../../components/accordion/accordion";
import "./skill.scss";

const modules = [
    {
        id: 1,
        name: "Module 1",
        desc: "Introduction to the Cloud",
        ques: [
            {
                id: 1,
                title: 'When and how it should be used?',
                content: '<b>What is an accordion?</b> <br/>An accordion always contains the category title, an expanded and a collapsed state, an icon indicating expansion, and the spacing between them. <br/><br/><b>How to embed an accordion?</b> <br/>The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.',
            },
            {
                id: 2,
                title: 'What if the user clicks on a collapsed card while another card is open?',
                content: 'The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.',
            },
            {
                id: 3,
                title: 'How to choose an icon to indicate expansion?',
                content: 'The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.',
            },
        ]
    },
    {
        id: 2,
        name: "Module 2",
        desc: "Compute in the Cloud",
        ques: []
    },
    {
        id: 3,
        name: "Module 3",
        desc: "Exploring Compute Services",
        ques: []
    },
    {
        id: 4,
        name: "Module 4",
        desc: "Going Global",
        ques: []
    },
    {
        id: 5,
        name: "Module 5",
        desc: "Networking",
        ques: []
    },
    {
        id: 6,
        name: "Module 6",
        desc: "Storage",
        ques: []
    },
    {
        id: 7,
        name: "Module 7",
        desc: "Databases",
        ques: []
    },
    {
        id: 8,
        name: "Module 8",
        desc: "AI ML and Data Analytics",
        ques: []
    },
    {
        id: 9,
        name: "Module 9",
        desc: "Security",
        ques: []
    },
    {
        id: 10,
        name: "Module 10",
        desc: "Monitoring, Compliance and Governance in the AWS Cloud",
        ques: []
    },
    {
        id: 11,
        name: "Module 11",
        desc: "Pricing and Support",
        ques: []
    },
    {
        id: 12,
        name: "Module 12",
        desc: "Migrating to the AWS Cloud",
        ques: []
    },
    {
        id: 13,
        name: "Module 13",
        desc: "Well-Architected Solutions",
        ques: []
    },
    {
        id: 14,
        name: "Module 14",
        desc: "Feedback",
        ques: []
    }
];

function Skill() {
    const theme = useTheme();

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = '/path/to/your/file.pdf';
        link.download = 'filename.pdf';
        link.click();
    };

    const convertToId = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-');
    };

    const handleScrollTo = (moduleName) => {
        const element = document.getElementById(convertToId(moduleName));
        if (element) {
            window.scrollTo({
            top: element.offsetTop - 20, // Offset for header (if needed)
            behavior: 'smooth', // Smooth scroll effect
            });
        }
    };

    return (
        <>
            <Box component="section" className="skill__wrap">
                <Box sx={{ borderBottom: '1px solid #f4f4f4', paddingBottom: "20px" }}>
                    <Container className="custom">
                        <Typography variant="h1" gutterBottom sx={{
                            fontSize: {
                                xs: '1.3rem',
                                sm: '2.0rem',
                                md: '2.2rem',
                                lg: '2.0rem'
                            },
                            mb: 0.75,
                            fontWeight: 600
                        }}>
                            React Application Developer Essentials
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                            <ul className="skill__breadcrumbs">
                                <li className="fixed">Path:</li>
                                <li className="shrinkable">Frontend Developer</li>
                                <li className="shrinkable">Library / Framework</li>
                                <li className="fixed">React</li>
                            </ul>
                            <Button variant="outlined" color="primary" size="small" 
                            sx={{ display: 'flex', alignItems: "center", columnGap: "4px", paddingInline: "10px", borderWidth: "2px"  }} 
                            onClick={downloadFile}><ArrowDownwardIcon fontSize="14px" /> Download PDF</Button>
                        </Box>
                    </Container>
                </Box>
                <Container className="custom">
                    <Box sx={{ flex: "1", display: "flex" }}>
                        <Box sx={{ 
                            maxWidth: "240px", 
                            borderRight: "1px solid #efefef", 
                            display: { xs: 'none', sm: 'flow-root' }, 
                            flex: "1 0 auto" 
                            }}>
                            <ul className="skill__outline">
                                {modules.map((module) => (
                                    <li key={module?.id}>
                                        <Link 
                                            to={'#' + convertToId(module?.name)} 
                                            onClick={() => handleScrollTo(module?.name)}>
                                            <Typography component="div">
                                            <span style={{ color: theme.palette.primary.main }}>
                                                &nbsp;{module?.name}&nbsp;
                                            </span>
                                            <Typography component="p">
                                                {module?.desc}
                                            </Typography>
                                            </Typography>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        <Box sx={{ padding: { xs: "16px 0px 0px 0px", md: "16px 0px 0px 40px" }, flex: "1" }}>
                            <CustomizedAccordions modules={modules} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Skill;