import React from 'react';
import './servicesPage.css';
import CardItem from './CardItem';
import cameraImage from './images/camera.jpg'
import consultingImage from './images/techConsult.jpg'
import networkingImage from './images/unifiSwitch.jpg'
import support from './images/techSupport.jpg'
import accessControl from './images/accessControl.jpg'
import airQuality from './images/airQuality.png'
import firewall from './images/fireWall.jpg'

function serviceCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' id='cardRow1'>
            <CardItem
              src={cameraImage}
              text='Alpha Security provides networked security and surveillance for your home, office, or retail environment.'
              label='Video Surveillance'
              path=''
            />
            <CardItem
              src={consultingImage}
              text='Our experts excel in network computing and the latest technologies, providing solutions that give our clients a competitive edge. We specialize in:'
              label='Consultants/System Integrators'
              path=''
            />
            <CardItem
              src={networkingImage}
              text='Alpha Security specializes in engineering and implementing flexible and mobile wireless and hybrid computer networks. We offer cost-effective solutions with quick setup times, tailored to meet specific needs.'
              label='Networking/Internet Access'
              path=''
            />
            <CardItem
              src={support}
              text='Our services ensure that your business can operate seamlessly across all platforms, offering solutions for setup, troubleshooting, maintenance, and optimization.'
              label='Windows, Mac, and Linux support'
              path=''
            />
          </ul>
          <ul className='cards__items' id='cardRow2'>
            <CardItem
              src={accessControl}
              text='Our Access Control Solutions ensure secure, regulated entry with advanced features like biometric scanners, card access, and real-time monitoring. Ideal for any business, these scalable systems are easy to manage and integrate, providing robust security and detailed access reports.'
              label='Access Control'
              path=''
              
            />
            <CardItem
              src={firewall}
              text= 'Enhance your network defense and remote access capabilities with advanced firewall and VPN solutions. These systems provide robust protection against external threats and secure connectivity for remote employees. Designed for seamless integration and straightforward management, they are ideal for safeguarding sensitive data and ensuring business continuity.'
              label='Firewall/VPN Solutions'
              path=''
            />
            <CardItem
              src={airQuality}
              text='Enhance indoor environments with advanced Air Quality Control Systems. Designed for both residential and commercial use, our systems efficiently monitor and improve air quality using cutting-edge sensors and filtration technology.'
              label='Indoor Air Quality Monitoring'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default serviceCards;