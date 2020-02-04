import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const Joke = ({ joke }) => {
  return (
    <div className='joke'>
      <div>{joke}</div>
    </div>
  )
}

Joke.propTypes = {
  joke: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  joke: state.joke,
});

export default connect(mapStateToProps)(Joke)