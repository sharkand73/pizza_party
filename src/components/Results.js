import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Back from './Back';
import Next from './Next';

import { calculateWeights } from '../supporting-code/Helper';
import ResultsTable from './ResultsTable';

const Results = ({ values }) => {

    const back = '/oil';
    const next = '/';
    const text = 'Start Over';

    const results = calculateWeights(values);

    return (
        <div className = 'container'>
            <Header text = 'Results' />
            <div className = 'body'>
                <ResultsTable results = {results} />            
                <div className='nav'>
                        <Back link={back} />
                        <Next link={next} text={text} />                    
                </div> 
            </div>         
            <Footer />
        </div>
    )
}

export default Results;