import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import GlobeVideo from './videos/globeVideo.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted style={{ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', objectFit: 'cover', zIndex: '-1' }}>
        <source src={GlobeVideo} type="video/mp4" />
      </video>
      <h1>Offering a variety of technical needs</h1>
      <p>Comprehensive Tech Solutions: From IT and Networking to Advanced Camera Systems</p>
      <div className='hero-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' to='/contact'>
          Contact Us
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' to='/Services'>
          About <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
