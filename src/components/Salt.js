import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';

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
                <div className = 'input'>
                    <label className = 'label'>
                    Salt?
                    </label>
                    <input type='number'
                    id = 'salt-input'
                    value = {salt} 
                    onChange = {e => setSalt(e.target.value)}
                    min = {0}
                    max = {4}
                    step = {0.1}
                />
                <label className='unit'>%</label>
                </div>
                <div className='nav'>
                    <Back link={back} />
                    <Next link={next} />                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Salt;