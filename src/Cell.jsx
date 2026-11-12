function Cell({ value }) {
  const valueClass = value ? `${value.toLowerCase()} taken` : '';

  return (
    <button type="button" className={`cell ${valueClass}`}>
      {value}
    </button>
  );
}

export default Cell;