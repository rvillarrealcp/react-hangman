import { useState } from 'react';

const Guesses = ({onGuess}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.length === 1) {
            onGuess(inputValue);
            setInputValue('');
        } else{
            alert("Please enter a single letter!")
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    };

    return (
        <form className="guess-input" onSubmit={handleSubmit}>
            <input
                type="text"
                maxLength='1'
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a letter"
            />
            <button type="submit">Submit Guess</button>
        </form>
    );
};

export default Guesses;