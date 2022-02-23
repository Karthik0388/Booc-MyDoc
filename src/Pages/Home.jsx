import React, { Fragment } from 'react';
import Slider1 from './Sliders/Slider1';
import Slider2 from './Sliders/Slider2';
import Slider3 from './Sliders/Slider3';
import Footer from './Footer/Footer';



const Home = () => {
    return (
        <Fragment>
            <Slider1/>
            <Slider2 />
            <Slider3 />
            <Footer/>
        </Fragment>
    )
      
};

export default Home;
