import './App.css';
import Board from './components/Board';
import Navigation from './components/Navigation';
import Keyboard from './components/Keyboard';
import { boardStart, createWordsSet } from './Words';
import { useState, createContext, useEffect, useRef } from 'react';
import EndGame from './components/EndGame';

export const AppContext = createContext();

function App() {

  const [wordsSet, setWordsSet] = useState(new Set());
  const [board, setBoard] = useState(boardStart);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [goodLetters, setGoodLetters] = useState([]);
  const [endGame, setEndGame] = useState({end: false, win: false});
  const [correctWord, setCorrectWord] = useState("");
  const prevCorrectWord = usePrevious(correctWord);

  useEffect(() => {
    createWordsSet().then((words) => {
      setWordsSet(words.setOfWords);
      setCorrectWord((words.word).toUpperCase());
    });
  }, [endGame]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const onSetLetter = (val) => {
    if(currentAttempt.letterPosition >= 5){
      return;
    } else {
      const updatedBoard = [...board];
      updatedBoard[currentAttempt.attempt][currentAttempt.letterPosition] = val;
      setBoard(updatedBoard);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1});
    }
  }

  const enterClick = () => {
    let currentWord = "";
    for(let i = 0; i < 5; i++){
      currentWord += board[currentAttempt.attempt][i];
    }

    if(currentAttempt.letterPosition !== 5){
        return;
    } else if (wordsSet.has(currentWord.toLocaleLowerCase())){
        setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPosition: 0});
    } else {
        alert("Try another word, we don't have that in our dictionary.");
    }

    if(currentWord === correctWord){
      setEndGame({end: true, win: true});
      return;
    }

    if(currentAttempt.attempt === 5){
      setEndGame({end: true, win: false});
    }
  }

  const deleteClick = () => {
    if(currentAttempt.letterPosition === 0){
      return;
    } else {
      const updatedBoard = [...board];
      updatedBoard[currentAttempt.attempt][currentAttempt.letterPosition -1] = "";
      setBoard(updatedBoard);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1});
    }
  }

  const reset = () => {
    setBoard([
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
    ]);
    setCurrentAttempt({attempt: 0, letterPosition: 0});
    setDisabledLetters([]);
    setGoodLetters([]);
    setCorrectWord("");
    setEndGame({end: false, win: false });
  }

  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <AppContext.Provider 
          value={{board, setBoard, currentAttempt, setCurrentAttempt , onSetLetter, deleteClick, enterClick, correctWord, wordsSet, disabledLetters, setDisabledLetters, endGame, setEndGame, reset, goodLetters, setGoodLetters, prevCorrectWord}}>
          <Board />
          <Keyboard />
          {
            endGame.end && <EndGame />
          }
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
