import { useState } from 'react';
import './GuessInput.css'

const GuessInput = ({accidental, cycleAccidental, guessValue, onChange}) => {

    return (
        <div className='container'>
            <div className='input-container'>
                <input className='guess' placeholder='Note' onChange={onChange} value={guessValue}></input>
                <button 
                className={ accidental === '♮' ? 'accidental natural' : 'accidental'}
                onClick={cycleAccidental}
                >
                    {accidental}</button>
            </div>
            <button>Guess</button>
        </div>
    );
}

export default GuessInput;