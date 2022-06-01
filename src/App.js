import './App.css';
import Board from './components/Board';
import Navigation from './components/Navigation';
import Keyboard from './components/Keyboard';
import { boardStart } from './Words';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardStart);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});

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
    if(currentAttempt.letterPosition !== 5){
        return;
    } else {
        setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPosition: 0});
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

  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt , onSetLetter, deleteClick, enterClick}}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
