import './CardSet.css';
import { useState } from 'react';
import Cards from './Cards'

const CardSet = () => {
    const [cardSet, setCardSet] = useState('easy');

    const changeDifficulty = (difficulty) => {
        setCardSet(difficulty);
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
            <Cards set={cardSet} />
        </div>
    );
}

export default CardSet;