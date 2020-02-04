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
    margin-left: 5%;
    margin-top: 2%;
`;

export default () => {
  return (
    <div className='landing'>
      <Shiluva>
        Chuck Norris
      </Shiluva>;
      <div className='header'>
        <div className='logo-container'>
          <img src={logo} className='App-logo' alt='logo' />
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
