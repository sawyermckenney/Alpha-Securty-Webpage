import React from 'react';
import { Link } from 'react-scroll';
import './servicesPage.css';
import serviceImage from './images/services.jpg';

function ServiceCard({ title, description, image }) {
  return (
    <div className='hero-container'>
      <img src={serviceImage} alt={title} className="service-card-image" style={{ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', objectFit: 'cover', zIndex: '-1' }}/>
      <h1>Services</h1>
    
      <div className='hero-btns'>
        <Link to="cardRow1" smooth={true} duration={500} className="btn btn-primary">
        Video Surveillance <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow1" smooth={true} duration={500} className="btn btn-primary">
        Consultants/System Integrators <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow1" smooth={true} duration={500} className="btn btn-primary">
        Networking/Internet Access <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow1" smooth={true} duration={500} className="btn btn-primary">
        Windows, Mac, and Linux support <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow2" smooth={true} duration={500} className="btn btn-primary">
        Access Control <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow2" smooth={true} duration={500} className="btn btn-primary">
        Firewall/VPN Solutions <i className="fas fa-chevron-down"></i>
        </Link>
        <Link to="cardRow2" smooth={true} duration={500} className="btn btn-primary">
        Indoor Air Quality Monitoring <i className="fas fa-chevron-down"></i>
        </Link>
        
      </div>
      
    
    
    
  
    </div>
      
  );
}

export default ServiceCard;
