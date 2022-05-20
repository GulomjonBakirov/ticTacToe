import React from "react";
import Row from "./Row";

const Board = ({ squares, onClick }) => (
  <div className="table">
    {squares.map((square, i) => (
      <Row key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
