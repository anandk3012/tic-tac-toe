import React from 'react'
import { useState,useEffect } from 'react'
import Square from './components/Square';

const App = () => {

  const [squares,setSquares] = useState(Array(9).fill(" "));
  const [current,setCurrent] = useState("X");

  const [winner,setWinner] = useState(null);
  const [draw,setDraw] = useState(false);
  
  
    useEffect(() => {
      checkWinner();
      checkDraw();
    }, [squares])

  const checkWinner = () => {
    const winpos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let pos of winpos){
      const [a,b,c] = pos;
      if (squares[a]!==" " && (squares[a] === squares[b]) && (squares[a] === squares[c])){
        setWinner(squares[a]);
        return;
      }
    }
  }

  const checkDraw = () => {
    if(!winner && squares.every(square => square!==" ")){
      setDraw(true);
    }
  }
  

  const handleClick = (index) => {
    if (squares[index]!==" " || winner){
      return;
    }
    console.log({index} + "clicked");
    const newSquares = [...squares];
    newSquares[index] = current;
    setSquares(newSquares);
    setCurrent(current === "X" ? "O" : "X");  
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-bold text-5xl p-4 my-5'>TIC-TAC-TOE</h1>
      {winner && <h1 className='text-bold text-3xl text-green-600 '>Winner : {winner} !!</h1>}
      {draw && !winner && <h1 className='text-bold text-3xl text-blue-600 '>It's a Draw!!</h1>}
      <h2 className='text-semibold text-2xl p-2'>Current : {current}</h2>
      <div className="board flex flex-wrap" style={{width:`300px`,height:`300px`}}>
        {squares.map((square,index) => {
          return (
            <Square 
              key={index}
              value={square}
              onClick={() => handleClick(index)}
            />
          ) 
        })}
      </div>
    </div>
  )
}

export default App
