import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';
import { ranges } from '../supporting-code/Settings';

const Salt = ({ values, setValues }) => {
    const next = '/oil';
    const back = '/yeast';

    const [salt, setSalt] = useState(values.salt);
    useEffect(() => {
        const temp = {...values};
        temp.salt = salt;
        setValues(temp);
    },[salt])

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input-div'>
                    <label className = 'label'>
                    Salt?
                    </label>
                    <input type='number'
                    id = 'salt-input'
                    value = {salt} 
                    onChange = {e => setSalt(e.target.value)}
                    min = {ranges.saltMin}
                    max = {ranges.saltMax}
                    step = {ranges.saltStep}
                />
                <label className='unit'>%</label>
                </div>
                <div className='nav'>
                    <Back link={back} />
                    <Next link={next} text='Next' />                   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Salt;