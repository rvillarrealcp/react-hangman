import React from 'react';

const Display = ({puzzle, guesses}) => {
    const displayWord = puzzle
    .split('')
    .map(letter => {
        const upperLetter = letter.toUpperCase();
    return guesses.includes(upperLetter) ? letter: '_';
    })
    .join(' ')

    const isWordComplete = !displayWord.includes('_')
    return(
        <div className ="puzzle-display">
            <h2>{displayWord}</h2>

            {isWordComplete && (
                <div className='win-message'>
                    <h2>YOU WIN!!!</h2>
                    <p>Congratulations on being wicked SMART!</p>
                </div>
            )}
        </div>
    );
}

export default Display