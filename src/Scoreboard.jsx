function Scoreboard({ scores, currentPlayer }) {
  return (
    <div className="scoreboard">
      <div className={`score score-x ${currentPlayer === 'X' ? 'active' : ''}`}>
        <span className="label">Player X</span>
        <span className="value">{scores.X}</span>
      </div>
      <div className="score score-draw">
        <span className="label">Draws</span>
        <span className="value">{scores.Draw}</span>
      </div>
      <div className={`score score-o ${currentPlayer === 'O' ? 'active' : ''}`}>
        <span className="label">Player O</span>
        <span className="value">{scores.O}</span>
      </div>
    </div>
  );
}

export default Scoreboard;