import React, { Component } from 'react';
import './App.css';
import { randomSprite } from './helpers/spriteHelper';
import Portrait from './Portrait';
import Choice from './Choice';
import { shuffle } from './helpers/utils';

class App extends Component {
  constructor(props) {
    super(props);
    const sprite = randomSprite();
    const choices = [sprite.species];
    let newSprite = randomSprite();
    while (choices.length < 4) {
      newSprite = randomSprite();
      if (choices.indexOf(newSprite.species) === -1) {
        choices.push(newSprite.species);
      }
    }
    this.state = {
      sprite: sprite,
      choices: shuffle(choices),
      score: 0,
      visible: false,
      correct: false,
    }
    this.reset = this.reset.bind(this);
  }

  reset() {
    const sprite = randomSprite();
    const choices = [sprite.species];
    let newSprite = randomSprite();
    while (choices.length < 4) {
      newSprite = randomSprite();
      if (choices.indexOf(newSprite.species) === -1) {
        choices.push(newSprite.species);
      }
    }
    this.setState({
      sprite: sprite,
      choices: shuffle(choices),
      visible: false,
      correct: false,
    });
  }

  guess(answer) {
    if (answer === this.state.sprite.species) {
      this.setState({
        score: this.state.score + 1,
        visible: true,
        correct: true,
      });
    } else {
      this.setState({
        score: this.state.score - 1,
      });
    }
  }

  render() {
    const choices = this.state.choices.map((choice, i) => <Choice
      key={i}
      choice={choice}
      index={i}
      onClick={() => this.guess(choice)}
    />);
    const next = <Choice
      key='next'
      choice='Next!'
      index={0}
      onClick={this.reset}
    />
    return (
      <div className="App">
        <h1>Guess that sprite!</h1>
        <h2>Score: {this.state.score}</h2>
        <Portrait
          visible={this.state.visible}
          sprite={this.state.sprite}
        />
        <div className='choices'>
          {this.state.correct ? next : choices}
        </div>
      </div>
    );
  }
}

export default App;
