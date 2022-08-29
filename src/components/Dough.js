import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';
import { ranges } from '../supporting-code/Settings';

const Dough = ({ values, setValues} ) => {
    const next = '/hydration';
    const back = '/';

    const [doughWeight, setDoughWeight] = useState(values.doughWeight);
    useEffect(() => {
        const temp = {...values};
        temp.doughWeight = doughWeight;
        setValues(temp);
    },[doughWeight]);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input-div'>
                    <label className = 'label'>
                    Dough weight
                    </label>
                    <input type='number' 
                    id = 'dough-input'
                    value = {doughWeight} 
                    onChange = {e => setDoughWeight(e.target.value)}
                    min = {ranges.doughMin}
                    max = {ranges.doughMax}
                    step = {ranges.doughStep}
                    autoFocus = {true}
                />
                <label className='unit'>g</label>
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

export default Dough;