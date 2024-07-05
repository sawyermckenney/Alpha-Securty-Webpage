import React from 'react';
import maroonBells from  './images/maroonBells.jpg';
import './contactHead.css';
function contactHead() {
  return (
    <div class="contactHead-container">
      <img src={maroonBells} alt='Maroon Bells' className="contact-card-image" style={{ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', objectFit: 'cover', zIndex: '-1' }}/>
      <h1>Contact</h1>
      
        <p>Email: info@alphasecuritynow.com</p>
        <p>Phone: (855)-852-5742</p>
        <p>Fax: (303)-845-8952</p>
      
    </div>
  );
}

export default contactHead
