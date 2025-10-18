import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

function Heading({ heading = 'Hello World', component }) {
    return (
        <Typography variant="body" component={component} color="primary.contrastText" className="sec__heading">{heading}</Typography>
    );
}

Heading.propTypes = {
    heading: PropTypes.string,
    component: PropTypes.string,
};

export default Heading;