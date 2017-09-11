import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.handleUserSelectFrom = this.handleUserSelectFrom.bind(this);
    this.handleUserSelectTo = this.handleUserSelectTo.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.Reset = this.Reset.bind(this);
    this.getUserInput = this.getUserInput.bind(this);

    this.state = {
      words: [
        { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
        { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
        { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
        { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
        { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
        { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
        { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
        { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
        { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
        { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
      ],
      input: "",
      message: "",
      correctAnswer: "",
      valueFrom: "english",
      valueTo: "french",
      contentID: "hidden",
    }
  }

  getUserInput(event) {
    let userInput = event.target.value;
    this.setState({
      input: userInput,
    })
  }

  handleUserSelectFrom(e){
    this.setState({ valueFrom: e.target.value });
  }

  handleUserSelectTo(e){
    this.setState({ valueTo: e.target.value });
  }

  handleUserInput(){
    let userInput = this.state.input;
    let message;
    let correctAnswer = this.state.correctAnswer;
    let empty = "";

    if (userInput === this.state.correctAnswer) {
      message = "Good job!" 
    } else {
      message = "Try again!"
    } if (userInput === empty) {
      message = "Type your answer below."
    }

    this.setState({
      message: message,
    })
  }

  Reset(){
    this.setState({
      input: "",
      message: "",
      correctAnswer: "",
      valueFrom: "english",
      valueTo: "french",
      contentID: "hidden",
    })
  }

  render() {
    return (

    <div className="container">
      
      <h1>Translate Practice</h1>
      <p>Translate from</p>
      <select className="language-select" placeholder="Your word here." onChange={this.handleUserSelectFrom} required="">
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>

      <p>Translate to</p>
      <select className="language-select" placeholder="Your word here." onChange={this.handleUserSelectTo} required="">
        <option value="french">French</option>
        <option value="english">English</option>
        <option value="german">German</option>
        <option value="spanish">Spanish</option>
      </select>
      
      <div className="box-left">
        <h2>{this.state.translate}</h2>
      </div>
      
      <div>
        <div className="box-right">
          <h2>{this.state.question}</h2>
          <p id={this.state.contentID}>{this.state.message}</p>
          <input className="answer-input" placeholder="Your word here." onClick={this.handleUserInput} onChange={this.getUserInput} required=""/>
          <button className="btn-submit" type="submit" value="submit" onClick={this.handleUserInput}>Submit</button>
        </div>
        
        <div>
          <button className="next-question">Next</button>
        </div>
      </div>

      <div>
        <button className="btn-reset" onClick={this.Reset}>Reset</button>
      </div>
      
    </div>
    );
  }
}

export default App;

    // Create a vocabulary study app that allows users to select a language and then get a series of flashcards of words. The user must be able to write the translation of the word and the app will tell them if they are right or wrong. If they are wrong, the correct translation must be shown. Allow the user to loop through the deck as many times as necessary until they get them all correct. Allow the user to reset at any time.

    // Step 1:
    // Ask user which language they would like to show on the cards and then ask what language they will be translating to.

    // Step 2:
    // Show user the first word and provide an input to have them type the translation & submit.

    // Step 3:
    // Evaluate the answer. Make sure that you account for extra white spaces at the beginning or end of the submitted word and also make your evaluation case insensitive. In other words, "TEST", " Test " and "test" would all be evaluated the same.

    // Step 4: 
    // If the user gets the answer correct, take the word out of the deck for this round and show the user how many words correct out of how many words in the deck.

    // Step 5:
    // When the user has gotten all words correct, congratulate them and ask if they want to reset.

    // Step 6:
    // The user should be able to reset to Step 1 at any time.
