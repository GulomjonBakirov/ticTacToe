import React, { useState } from "react";
import { calculateWinner } from "./utility/calculateWinner";
import Table from "./components/Table";
import Logo from "./components/Logo";

const Game = () => {
  const [movement, setMovement] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(true);
  const winner = calculateWinner(movement[stepNumber]);
  const xO = nextPlayer ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = movement.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setMovement([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setNextPlayer(!nextPlayer);
  };

  const reset = () => {
    setStepNumber(0);
  };

  return (
    <>
      <Logo />
      <div className="content">
        <Table squares={movement[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {movement.map((_step, move) => {
              return move > 0 ? (
                <li key={move}>
                  <p>Go to move #{move}</p>
                </li>
              ) : null;
            })}
          </div>
          <div>
            <h3 className={winner ? "green" : "yellow"}>
              {winner ? "Winner: " + winner : "Next Player: " + xO}
            </h3>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
