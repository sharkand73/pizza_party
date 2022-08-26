import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';

const Yeast = () => {
    const next = '/salt';
    const back = '/hydration';

    const [yeast, setYeast] = useState(2.0);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                    Yeast (%)?
                    </label>
                    <input type='number'
                // value = {yeast} 
                // onChange = {value => setYeast(value)}
                // minValue = {0.1}
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

export default Yeast;