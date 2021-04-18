import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Facilities from '../../Facilities/Facilities';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Services from '../../Services/Services';
import Testimonials from '../../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <Facilities />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;