import React from 'react';
import { Grid } from 'react-mdl';
import logo from './assets/logo.png';
import './App.css';
import Catagories from './components/categories';
import Joke from './components/joke';
import styled from 'styled-components';

//this is just a snippet of code that exhibits styled-components
const Shiluva = styled.div`
  color: #ff4081;
  background-color: #fff;
  padding: 10px 5px;
  width: 120px;
  border-radius: 5px;
  text-transform: capitalize;
  position: absolute;
  right: 4%;
  top: 5%;

  @media screen and (max-width: 414px){
    top: 2%;
    right: 4%;
  }
`;

const Title = styled.p`
  color: #fff;
  text-align: left;
  font-size: 30px;
  margin-left: 8%;
`;

export default () => {
  return (
    <div className='landing'>
      <Shiluva>
        Chuck Norris
      </Shiluva>
      <div className='header'>
        <div className='logo-container'>
          <img src={logo} className='App-logo' alt='logo' />
          <Title>Chuck Norris Jokes</Title>
          <p className="paragraph paragraph-top">Chuck Norris facts are satirical factoids about martial artist and actor 
            Chuck Norris that have become an Internet phenomenon and as a result have 
            become widespread in popular culture. The 'facts' are normally absurd hyperbolic 
            claims about Norris' toughness, attitude, virility, sophistication, and masculinity
          </p>
          <p className="paragraph">
            Chuck Norris facts have spread around the world, leading not only to translated versions, 
            but also spawning localized versions mentioning country-specific advertisements and other 
            Internet phenomena. Allusions are also sometimes made to his use of roundhouse kicks to 
            perform seemingly any task, his large amount of body hair with specific regard to his beard, 
            and his role in the action television series Walker, Texas Ranger.
          </p>
      </div>
      </div>
      <div className='content-container'>
        <div className='joke-container'>
          <Joke />
        </div>
        <div className='list-container'>
          <Catagories />
        </div>
        
      </div>  
    </div>
  );
}
