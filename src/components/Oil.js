import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';
import { ranges } from '../supporting-code/Settings';

const Oil = ({ values, setValues }) => {    
    const back = '/salt';
    const next = '/results';
    const text = 'Results';

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
                <div className = 'input-div'>
                    <label className = 'label'>
                    Oil
                    </label>
                    <input type='number' 
                    id = 'oil-input'
                    value = {oil} 
                    onChange = {e => setOil(e.target.value)}
                    min = {ranges.oilMin}
                    max = {ranges.oilMax}
                    step = {ranges.oilStep}
                    autoFocus = {true}
                />
                <label className='unit'>%</label>
                </div>                
                <div className='nav'>
                    <Back link={back} />
                    <Next link={next} text={text} />                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Oil;