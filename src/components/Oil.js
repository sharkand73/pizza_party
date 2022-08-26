import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Calculate from './Calculate';
import Back from './Back';

const Oil = () => {    
    const back = '/salt';
    const next = '/results';

    const [oil, setOil] = useState(4.0);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                    Oil (%)?
                    </label>
                    <input type='number' 
                // value = {oil} 
                // onChange = {value => setOil(value)}
                // minValue = {0}
                // maxValue = {10}
                // rounded 
                // valueType = 'real'
                // step = {0.1}
                // rightButtonBackgroundColor='#aaa'
                // leftButtonBackgroundColor='#aaa'
                />
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