import React, { useState, useEffect } from 'react';
import Square from './components/Square';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(" "));
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    checkWinner();
    checkDraw();
  }, [squares]);

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (combination in winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] !== " " && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        return;
      }
    }
  };

  const checkDraw = () => {
    if (!winner && squares.every(square => square !== " ")) {
      setDraw(true);
    }
  };

  const handleClick = (index) => {
    if (winner || squares[index] !== " ") return;

    console.log(`Square ${index} clicked`);
    const newSquares = [...squares];
    newSquares[index] = current;
    setSquares(newSquares);
    setCurrent(current === "X" ? "O" : "X");
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl p-4 mt-5'>TIC-TAC-TOE</h1>
      {winner && <h2 className='font-bold text-green text-2xl p-3'>Winner: {winner} !!</h2>}
      {draw && !winner && <h2 className='font-bold text-blue text-2xl p-3'>It's a Draw!</h2>}
      <h1 className='font-semibold text-xl p-2 '>Current player: {current}</h1>
      <div className='game flex flex-wrap' style={{ width: '300px', height: '300px' }}>
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
