import './CardSet.css';
import { useState } from 'react';
import Card from './Card';
import GuessInput from './GuessInput';
import sets from '../data/cardSets.json';

const CardSet = () => {
    const [cardSet, setCardSet] = useState('easy');
    const [index, setIndex] = useState(0)
    const [accidentalIndex, setAccidentalIndex] = useState(0);
    const [guessValue, setGuessValue] = useState('');
    const [guessResult, setGuessResult] = useState('');
    const [popupActive, setPopupActive] = useState(false);

    const currentCard = sets[cardSet][index];

    // State of the user's guess typed into the GuessInput component
    const onInputChange = (e) => {
        let val = e.target.value;
        
        if (val.length > 1) {
            val = val[val.length-1];
        }

        if (val.length !== 0) {
            val = val.toUpperCase();
        } else {
            setGuessValue('');
        }

        if (['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(val)){
            setGuessValue(val);
        }
    };

    const accidentals = ['♮', '♯', '♭'];
    
    // Cycles through the selected accidental in the GuessInput component
    const cycleAccidental = () => {
        let newIndex = (accidentalIndex + 1) % 3;

        setAccidentalIndex(newIndex);
    };

    const checkGuess = () => {
        const note = guessValue;
        const accidental = accidentals[accidentalIndex];
        if (currentCard.answer.includes(note + accidental)) {
            setGuessResult("Correct!");
        } else {
            setGuessResult("Incorrect!");
        }

        setPopupActive(true);

        setTimeout(() => { setPopupActive(false)}, 3000);
    };

    const changeDifficulty = (difficulty) => {
        setCardSet(difficulty);
        setIndex(1)
        setTimeout(() => setIndex(0), 0);
    };

    const moveNext = () => {
        if (index < sets[cardSet].length - 1) {
            setIndex(index + 1);
        }
    };

    const movePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handleShuffle = () => {
        shuffleCurrentSet();
        setIndex(1)
        setTimeout(() => setIndex(0), 0);
    };

    const shuffleCurrentSet = () => {
        let currentIndex = sets[cardSet].length;
        let randomIndex;

        while (currentIndex !== 0) {
            // Choose a random index from the remainder of the list
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap the value at the currentIndex with the randomIndex
            [sets[cardSet][currentIndex], sets[cardSet][randomIndex]] = [
                sets[cardSet][randomIndex],
                sets[cardSet][currentIndex]
            ];
        }

        // Once shuffled, reset user's current index
        setIndex(0);
    };

    const handleEasy = () => { changeDifficulty('easy') };
    const handleMedium = () => { changeDifficulty('medium') };
    const handleHard = () => { changeDifficulty('hard') };

    return (
        <div className='content'>
            <div className='difficulty'>
                <button onClick={handleEasy} disabled={cardSet === 'easy'}>Easy</button>
                <button onClick={handleMedium} disabled={cardSet === 'medium'}>Medium</button>
                <button onClick={handleHard} disabled={cardSet === 'hard'}>Hard</button>
            </div>
            <p>Total Cards: {sets[cardSet].length - 1}</p>
            <Card card={sets[cardSet][index]} key={index} />
            <p className={(popupActive ? 'popup visible' : 'popup') + ' ' + (guessResult === 'Correct!' ? 'correct' : 'incorrect')}>{guessResult}</p>
            <GuessInput
                accidental={accidentals[accidentalIndex]} 
                cycleAccidental={cycleAccidental}
                guessValue={guessValue}
                onChange={onInputChange}
                checkGuess={checkGuess}
            />
            <div className='next'>
                <button
                    onClick={movePrevious}
                    disabled={index === 0}>
                        Previous
                </button>
                <button 
                    onClick={moveNext}
                    disabled={index === sets[cardSet].length-1}>
                        Next
                </button>
                <button
                    onClick={handleShuffle}>
                        Shuffle
                    </button>
            </div>
        </div>
    );
};

export default CardSet;