

import { useState } from "react";



function Sqare({value,onSquareClick}) {
  
  return (
    <button onClick={onSquareClick} className="border-2 border-gray-600 m-2 p-8"> {value} </button>
    
  );
}



export default function App() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  function handleClick(i){
      const newValue = value.slice();
      if(newValue[i]){
        return;
      }
      if(xNext){
        newValue[i] = "X"
      }else{
        newValue[i] = "O"
      }
      
      setValue(newValue)
      setXNext(!xNext);
  }
  return (
    <>
      <div className="flex">
        <Sqare value={value[0]} onSquareClick = {()=>handleClick(0)} />
        <Sqare value={value[1]} onSquareClick = {()=>handleClick(1)}/>
        <Sqare  value={value[2]} onSquareClick = {()=>handleClick(2)}/>
      </div>
      <div className="flex">
        <Sqare value={value[3]} onSquareClick = {()=>handleClick(3)}/>
        <Sqare value={value[4]} onSquareClick = {()=>handleClick(4)}/>
        <Sqare value={value[5]} onSquareClick = {()=>handleClick(5)}/>
      </div>
      <div className="flex">
        <Sqare value={value[6]} onSquareClick = {()=>handleClick(6)}/>
        <Sqare value={value[7]} onSquareClick = {()=>handleClick(7)}/>
        <Sqare value={value[8]} onSquareClick = {()=>handleClick(8)}/>
      </div>
    </>
  );
}
