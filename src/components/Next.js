import React from "react";
import { Link } from "react-router-dom";

const Next = ({ link }) => {
    return (
        <Link to={link} >
        <div className = 'button'>Next &gt;&gt;</div>
        </Link>
    )
} 

export default Next;