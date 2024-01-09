

import { useState } from "react";



function Square({value,onSquareClick}) {
  
  return (
    <button onClick={onSquareClick} className="border-2 border-gray-600 m-2 p-8"> {value} </button>
    
  );
}



export default function Board() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  function handleClick(i){
      const nextSquares = squares.slice();
      if(nextSquares[i] || calculateWinner(squares)){
        return;
      }
      if(xIsNext){
        nextSquares[i] = "X"
      }else{
        nextSquares[i] = "O"
      }
      
      setsquares(nextSquares)
      setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <h1>{status}</h1>
      <div className="flex">
        <Square value={squares[0]} onSquareClick = {()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick = {()=>handleClick(1)}/>
        <Square  value={squares[2]} onSquareClick = {()=>handleClick(2)}/>
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick = {()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick = {()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick = {()=>handleClick(5)}/>
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick = {()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick = {()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick = {()=>handleClick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
