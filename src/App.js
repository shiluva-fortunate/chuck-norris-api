import React from 'react';
import { Grid } from 'react-mdl';
import logo from './assets/logo.png';
import './App.css';

import Catagories from './components/categories';
import Joke from './components/joke';

export default () => {
  return (
    <Grid className='content-grid'>
      <div className='header'>
        <div className='logo-container'>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <Joke />
      </div>
      <Catagories />
    </Grid>
  );
}
