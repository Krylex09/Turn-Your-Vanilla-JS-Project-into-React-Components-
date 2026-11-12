import Cell from './Cell';

function Board({ cells }) {
  return (
    <div className="board">
      {cells.map((cellValue, index) => (
        <Cell key={index} value={cellValue} />
      ))}
    </div>
  );
}

export default Board;