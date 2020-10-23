
import React from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    return (
        <>
        <h2>
            The page you are looking for can not be found !
        </h2>
        <Link to="/">Go to Home Page</Link>
        </>
    );
}

export default NotFound;