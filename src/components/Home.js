import React from "react";
import Header from './Header';
import Footer from "./Footer";
import StartButton from "./StartButton";
import Tick from "./Tick";
import { title } from '../supporting-code/Settings';


const Home = ( {useFlour, setUseFlour} ) => {

    const start = useFlour ? 'flour' : 'dough';

    return (
        <div className='container'>
            <Header text = {title} />
            <div className='body start'>
                <div className="select-options">
                    <div className="home-option" onClick={()=>setUseFlour(false)}>
                        <div className="home-option-text">
                        Use dough weight
                        </div>
                        <Tick show={!useFlour} />
                    </div>
                    <div className="home-option" onClick={()=>setUseFlour(true)}> 
                        <div className="home-option-text">
                        Use flour weight
                        </div>
                        <Tick show={useFlour} />
                    </div>
                </div>
                <StartButton link = {start} />
            </div>
            <Footer />        
        </div>
    )
}

export default Home;