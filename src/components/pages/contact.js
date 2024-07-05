import React, { useEffect } from 'react';
import '../../App.css'; // Ensure the path is correct
import Footer from '../Footer';
import ContactForm from '../contactForm'
import ContactHead from '../contactHead';
function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="services-page">
            <ContactHead />
            <ContactForm />
            <Footer />
        </div>        
    );
}
export default Services;