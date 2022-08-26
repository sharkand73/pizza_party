import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Calculate from './Calculate';
import Back from './Back';

const Oil = ({ values, setValues }) => {    
    const back = '/salt';
    const next = '/results';

    const [oil, setOil] = useState(values.oil);
    useEffect(() => {
        const temp = {...values};
        temp.oil = oil;
        setValues(temp);
    },[oil])

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                    Oil?
                    </label>
                    <input type='number' 
                    id = 'oil-input'
                    value = {oil} 
                    onChange = {e => setOil(e.target.value)}
                    minValue = {0}
                    maxValue = {10}
                    step = {0.1}
                />
                <label className='unit'>%</label>
                </div>                
                <div className='nav'>
                    <Back link={back} />
                    <Calculate link={next} />                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Oil;