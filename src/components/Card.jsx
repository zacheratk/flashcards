import './Card.css';
import { useState } from 'react';

const Card = (props) => {
    const [flipped, setFlipped] = useState(false)

    const toggleFlipped = () => {
        setFlipped(!flipped)
        return flipped
    }

    return (
        <div className={flipped ? 'card flipped' : 'card'} onClick={toggleFlipped}>
            <div className='card-inner'>
                <div className='card-front'>
                    <p>{props.card.front}</p>
                </div>
                <div className='card-back'>
                    <p>{props.card.back}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;