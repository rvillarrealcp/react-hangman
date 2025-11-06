import { useState } from 'react';
import './App.css';
import Display from './components/Display.jsx';
import Guesses from './components/Guesses.jsx';
import IncorrectGuesses from './components/IncorrectGuesses.jsx';
import words from './words.json';

function App() {

  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.words.length);
    return words.words[randomIndex].toUpperCase();
  };

  const [puzzle, setPuzzle] = useState(randomWord());
  const [guesses, setGuesses] = useState([])

  const handleGuess = (letter) => {
    const upperLetter = letter.toUpperCase();

    if (guesses.includes(upperLetter)) {
      alert('You already guessed that letter!');
      return;
    }

    setGuesses([...guesses, upperLetter]);
  };

  const resetGame = () => {
    const word = randomWord();
    setPuzzle(word);
    setGuesses([])
  };

  return (
    <div className="App">
      <h1>HANGMAN</h1>

      <Display
        puzzle={puzzle}
        guesses={guesses}
      />

      <Guesses
        onGuess={handleGuess}
      />

      <IncorrectGuesses
        puzzle={puzzle}
        guesses={guesses}
      />

      <button className="reset-button" onClick={resetGame}>
        Start New Game
      </button>
    </div>
  )
}

export default App

