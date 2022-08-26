import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';
import { ranges } from '../supporting-code/Settings';

const Hydration = ({ values, setValues }) => {
    const next = '/yeast';
    const back = '/dough';

    const [hydration, setHydration] = useState(values.hydration);
    useEffect(() => {
        const temp = {...values};
        temp.hydration = hydration;
        setValues(temp);
    },[hydration]);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input-div'>
                    <label className = 'label'>
                 Hydration?
                    </label>
                    <input type='number'
                    id = 'hydration-input'
                    value = {hydration} 
                    onChange = {e => setHydration(e.target.value)}
                    min = {ranges.hydrationMin}
                    max = {ranges.hydrationMax}
                    step = {ranges.hydrationStep}
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

export default Hydration;