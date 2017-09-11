import React from 'react';
import PropTypes from 'prop-types';
import words from './Words.js';

function WordsList(props) {
  return (
    <ul>
      {props.words.map(function(words, i){
        return (
          <li key={i}>{words}</li>
        );

      }, this)}
    </ul>
  )

}

export default WordsList;

DogList.PropTypes = {
  WordsList: PropTypes.array.required
};