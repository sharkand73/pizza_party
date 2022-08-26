import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';

const Salt = () => {
    const next = '/oil';
    const back = '/yeast';

    const [salt, setSalt] = useState(2.5);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                    Salt (%)?
                    </label>
                    <input type='number'
                // value = {salt} 
                // onChange = {value => setSalt(value)}
                // minValue = {0}
                // maxValue = {4}
                // rounded 
                // valueType = 'real'
                // step = {0.1}
                // rightButtonBackgroundColor='#aaa'
                // leftButtonBackgroundColor='#aaa'
                />
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