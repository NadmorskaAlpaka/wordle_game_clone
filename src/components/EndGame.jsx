import React, { useContext } from 'react';
import { AppContext } from '../App';

const EndGame = () => {
    const { endGame, currentAttempt, reset, prevCorrectWord } = useContext(AppContext);
    return (
        <div className='end_game'>
            <h3 className='end_titles'>
                {
                    endGame.win ? "Congratulations you win!" : "Oppsss, don't be sad try again!"
                }
            </h3>
            <h3 className='end_titles'>Correct word: {prevCorrectWord}</h3>
            {
                endGame.win && (<h3 className='end_titles'>You needed {currentAttempt.attempt} tries to win</h3>)
            }
            <button className="reset" onClick={reset}>Try Again</button>
        </div>
    );
}

export default EndGame;
