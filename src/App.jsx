import Scoreboard from './Scoreboard';
import GameStatus from './GameStatus';
import Board from './Board';
import './App.css';

// Hard-coded sample state (No useState required yet)
const sampleBoard = [
  'X', '', 'O',
  '', 'O', '',
  'X', 'X', 'O'
];

const sampleScores = {
  X: 3,
  Draw: 1,
  O: 2
};

const currentPlayer = 'X';

function App() {
  return (
    <main className="game">
      <h1>
        Tic<span>·</span>Tac<span>·</span>Toe
      </h1>

      <Scoreboard scores={sampleScores} currentPlayer={currentPlayer} />

      <GameStatus currentPlayer={currentPlayer} />

      <Board cells={sampleBoard} />

      <button type="button" className="restart-btn">
        ↻ New Round
      </button>
    </main>
  );
}

export default App;