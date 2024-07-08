import React from 'react'
import './supportHead.css'
import Boulder from './images/boulder.jpg'
function supportHead() {
  return (
    <div>
      <div class="supportHead-container">
      <img src={Boulder} alt='Maroon Bells' className="contact-card-image" style={{ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', objectFit: 'cover', zIndex: '-1' }}/>
      <h1>Support</h1> 
        </div>
    </div>
  )
}

export default supportHead
