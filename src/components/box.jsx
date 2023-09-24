import React, { useState } from "react";
import Squear from "./squear";
import "../components/box.css";

export default function Box() {
  const [state, setState] = useState(Array(10).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkwinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [6, 4, 2],
      [8, 4, 0],
    ];
    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkwinner();
  console.log(isWinner);

  const handleChange = (index) => {
    if (state[index] !== null) {
      return state;
    }

    const copyState = [...state];
    copyState[index] = isXTurn ? "x" : "o";
    setState(copyState);
    setIsXTurn(!isXTurn);
    console.log(index);
  };

  const handlereset = () => {
    setState(Array(10).fill(null));
    console.log("clicked");
  };

  return (
    <div className="container">
      {isWinner ? (
        <>
          {isWinner} won this game {""}
          <button onClick={handlereset}>Rest buttom</button>
        </>
      ) : (
        <>
          <h1>Please {isXTurn ? "x" : "o"} move now</h1>
          <div className="container-row">
            <Squear onclick={() => handleChange(1)} value={state[1]} />
            <Squear onclick={() => handleChange(2)} value={state[2]} />
            <Squear onclick={() => handleChange(3)} value={state[3]} />
          </div>
          <div className="container-row">
            <Squear onclick={() => handleChange(4)} value={state[4]} />
            <Squear onclick={() => handleChange(5)} value={state[5]} />
            <Squear onclick={() => handleChange(6)} value={state[6]} />
          </div>
          <div className="container-row">
            <Squear onclick={() => handleChange(7)} value={state[7]} />
            <Squear onclick={() => handleChange(8)} value={state[8]} />
            <Squear onclick={() => handleChange(9)} value={state[9]} />
          </div>
          <hr />
          {
            state &&
          <button onClick={handlereset}>Rest buttom</button>
          }
        </>
      )}
    </div>
  );
}
