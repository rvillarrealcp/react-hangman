import React from 'react';

const IncorrectGuesses = ({ puzzle, guesses }) => {
  // Get unique letters from the puzzle (uppercase)
  const puzzleLettersSet = new Set(puzzle.toUpperCase().split(''));
  
  // Filter to find incorrect guesses
  const incorrectLettersArray = guesses.filter(letter => {
    return !puzzleLettersSet.has(letter.toUpperCase());
  });
  
  const incorrectLetters = incorrectLettersArray.join(', ');
  const incorrectCount = incorrectLettersArray.length;

  return (
    <div className="incorrect-guesses">
      <h3>Incorrect Guesses: {incorrectCount}/6</h3>
      <p>{incorrectLetters || 'None yet'}</p>
      
      {incorrectCount >= 6 && (
        <div className="game-over-message">
          <h2>Game Over!</h2>
          <p>You've run out of guesses. The word was: <strong>{puzzle}</strong></p>
        </div>
      )}
    </div>
  );
};

export default IncorrectGuesses;