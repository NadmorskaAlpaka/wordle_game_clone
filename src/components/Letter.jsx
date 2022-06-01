import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter( {letterPosition, attemptWord} ){
    const { board, correctWord, currentAttempt, setDisabledLetters, setGoodLetters } = useContext(AppContext);
    const letter = board[attemptWord][letterPosition];

    const correct = correctWord[letterPosition] === letter;
    const inWord = !correct && correctWord.includes(letter) && letter !== "";

    const letterColor = currentAttempt.attempt > attemptWord && (correct ? " correct" : inWord ? " inWord" : " wrong");

    useEffect(() =>{
        if(letter !== "" && !correct && !inWord){
            setDisabledLetters((prev) => [...prev, letter]);
        }
        if(letter === correct || inWord){
            setGoodLetters((prev) => [...prev, letter]);
        }
    }, [currentAttempt.attempt]);

    return (
        <div className={`letter ${letterColor}`}> 
            { letter } 
        </div>
    )
}

export default Letter;