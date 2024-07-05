import React, { useEffect } from 'react';
import '../../App.css'; // Ensure the path is correct
import Footer from '../Footer';
import ServiceCard from '../servicesPage';
import Cards from '../servicesCards';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="services-page">
            <ServiceCard />
            <Cards />
            <Footer />
        </div>        
    );
}
export default Services;


