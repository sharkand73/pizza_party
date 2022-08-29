import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Tick = ({ show }) => {
    if (!show) {
        return null;
    }
    return (
        <div className='tick'>
            <FontAwesomeIcon icon={faCheck} />
        </div>
    )
} 

export default Tick;