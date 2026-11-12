function GameStatus({ currentPlayer }) {
  const highlightColor = currentPlayer === 'X' ? '#f472b6' : '#38bdf8';

  return (
    <p className="status">
      Player <span style={{ color: highlightColor }}>{currentPlayer}</span>&apos;s turn
    </p>
  );
}

export default GameStatus;