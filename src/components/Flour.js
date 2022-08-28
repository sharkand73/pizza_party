import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import { ranges } from '../supporting-code/Settings';

const Flour = ({ values, setValues} ) => {
    const next = '/hydration';

    const [flourWeight, setFlourWeight] = useState(values.flourWeight);
    useEffect(() => {
        const temp = {...values};
        temp.flourWeight = flourWeight;
        setValues(temp);
    },[flourWeight]);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input-div'>
                    <label className = 'label'>
                    Flour weight
                    </label>
                    <input type='number' 
                    id = 'flour-input'
                    value = {flourWeight} 
                    onChange = {e => setFlourWeight(e.target.value)}
                    min = {ranges.flourMin}
                    max = {ranges.flourMax}
                    step = {ranges.flourStep}
                    autoFocus = {true}
                />
                <label className='unit'>g</label>
                    </div>
                <div className='first-nav'>
                    <Next link={next} text='Next' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Flour;