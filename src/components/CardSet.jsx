import './CardSet.css';
import { useState } from 'react';
import Card from './Card'
import sets from '../data/cardSets.json'

const CardSet = () => {
    const [cardSet, setCardSet] = useState('easy');
    const [index, setIndex] = useState(0)

    const changeDifficulty = (difficulty) => {
        setCardSet(difficulty);
        setIndex(0);
    }

    const setRandomIndex = () => {
        let randomIndex = Math.floor(Math.random() * sets[cardSet].length);
        setIndex(randomIndex);
    }

    const handleEasy = () => { changeDifficulty('easy') }
    const handleMedium = () => { changeDifficulty('medium') }
    const handleHard = () => { changeDifficulty('hard') }




    return (
        <div className='content'>
            <div className='difficulty'>
                <button onClick={handleEasy}>Easy</button>
                <button onClick={handleMedium}>Medium</button>
                <button onClick={handleHard}>Hard</button>
            </div>
            <Card card={sets[cardSet][index]} key={index} />
            <div className='next'>
                <button onClick={setRandomIndex}>Next</button>
            </div>
        </div>
    );
}

export default CardSet;