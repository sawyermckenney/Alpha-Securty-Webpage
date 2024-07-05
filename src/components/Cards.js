import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import codeImage from './images/code.jpg'
import serverImage from './images/server.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Founded in 1994, we are a technology solutions company with a diverse background of talent and experience.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={codeImage}
              text='We provide a wide variety of IT-releated services. We offer solutions that deliver a competitive advantage to our customers on every level.'
              label='Services'
              path='/services'
            />
            <CardItem
              src={serverImage}
              text='Would you like more detail about the services and products we offer? Call us or send us an email!'
              label='Contact Us'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;