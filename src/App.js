import React from 'react';
import { Grid } from 'react-mdl';
import logo from './assets/logo.png';
import './App.css';

import Catagories from './components/categories';
import Joke from './components/joke';

export default () => {
  return (
    <div className='landing'>
      <p className='badge'>Chuck Norris</p>
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
