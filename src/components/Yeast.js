import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';
import { ranges } from '../supporting-code/Settings';

const Yeast = ({ values, setValues }) => {
    const next = '/salt';
    const back = '/hydration';

    const [yeast, setYeast] = useState(values.yeast);
    useEffect(() => {
        const temp = {...values};
        temp.yeast = yeast;
        setValues(temp);
    },[yeast]);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input-div'>
                    <label className = 'label'>
                    Yeast
                    </label>
                    <input type='number'
                    id = 'yeast-input'
                    value = {yeast} 
                    onChange = {e => setYeast(e.target.value)}
                    min = {ranges.yeastMin}
                    max = {ranges.yeastMax}
                    step = {ranges.yeastStep}
                    autoFocus = {true}
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

export default Yeast;