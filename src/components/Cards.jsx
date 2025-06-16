import './Cards.css';
import { useState } from 'react';

const Cards = (props) => {
    const [flipped, setFlipped] = useState(false)

    const toggleFlipped = () => {
        setFlipped(!flipped)
        return flipped
    }

    return (
        <div className={flipped ? 'card flipped' : 'card'} onClick={toggleFlipped}>
            <div className='card-inner'>
                <div className='card-front'>
                    <p>{props.set}</p>
                </div>
                <div className='card-back'>
                    <p>You've flipped the card!</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;