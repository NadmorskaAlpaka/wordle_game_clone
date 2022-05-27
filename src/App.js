import './App.css';
import Board from './components/Board';
import Navigation from './components/Navigation';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
