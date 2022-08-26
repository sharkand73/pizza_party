import React from "react";
import Header from './Header';
import Footer from "./Footer";
import StartButton from "./StartButton";
import { title } from '../supporting-code/Settings';


const Home = () => {
    return (
        <div className='container'>
            <Header text = {title} />
            <div className='body start'>
                <StartButton link = 'dough' />
            </div>
            <Footer />        
        </div>
    )
}

export default Home;