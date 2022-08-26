import React from "react";
import { Link } from "react-router-dom";

const Back = ({ link }) => {
    return (
        <Link to={link} >
        <div className = 'button'>&lt;&lt; Back</div>
        </Link>
    )
} 

export default Back;