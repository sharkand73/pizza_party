import React, { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Next from './Next';
import Back from './Back';

const Hydration = () => {
    const next = '/yeast';
    const back = '/dough';

    const [hydration, setHydration] = useState(60);

    return (
        <div className = 'container'>
            <Header text = '' />
            <div className = 'body'>
                <div className = 'input'>
                    <label className = 'label'>
                 Hydration (%)?
                    </label>
                    <input type='number'
                // value = {hydration} 
                // onChange = {value => setHydration(value)}
                // minValue = {55}
                // maxValue = {90}
                // rounded 
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

export default Hydration;