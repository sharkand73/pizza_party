import React from "react";
import { Link } from "react-router-dom";

const Next = ({ link, text }) => {
    return (
        <Link to={link} >
        <div className = 'button'>{text} &gt;&gt;</div>
        </Link>
    )
} 

export default Next;