import React from "react";
import { Link } from 'react-router-dom';

const StartButton = ( {link} ) => {
    return (
        <Link to={link} >
            <div className='button'> 
                &gt; Start &lt; 
            </div>
        </Link>
    )
}

export default StartButton;