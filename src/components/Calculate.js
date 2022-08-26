import React from "react";
import { Link } from "react-router-dom";

const Calculate = ({ link }) => {
    return (
        <Link to={link} >
        <span className = 'calculate button'>Calculate &gt;&gt;</span>
        </Link>
    )
} 

export default Calculate;