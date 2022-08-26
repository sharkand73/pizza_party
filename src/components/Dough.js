import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';

const Dough = () => {
    const next = '/hydration';

    const [doughWeight, setDoughWeight] = useState(1000);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                    Weight of dough (g)?
                    </label>
                    <input type='number' 
                // value = {doughWeight} 
                // onChange = {value => setDoughWeight(value)}
                // minValue = {150}
                // maxValue = {10000}
                // rounded 
                // rightButtonBackgroundColor='#aaa'
                // leftButtonBackgroundColor='#aaa'
                />
                    </div>
                <div className='first-nav'>
                    <Next link={next} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dough;