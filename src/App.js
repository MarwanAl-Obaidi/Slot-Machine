import React, { useState } from 'react';
import './App.css';

const SYMBOLS = ["cherry", "lemon", "orange", "plum", "bell", "bar", "seven"];
const WIN_COMBINATIONS =
[
  ["cherry", "cherry", "cherry"],
  ["lemon", "lemon", "lemon"],
  ["orange", "orange", "orange"],
  ["plum", "plum", "plum"],
  ["bell", "bell", "bell"],
  ["bar", "bar", "bar"],
  ["seven", "seven", "seven"],
];

function SlotMachine() {
  const [reels, setReels] = useState([0, 0, 0]);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  function spin() {
    const newReels = [
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
    ];
    setReels(newReels);

    const symbols = newReels.map(index => SYMBOLS[index]);
    for (const combination of WIN_COMBINATIONS) {
      if (symbols.toString() === combination.toString()) {
        setResult("You Win!");
        setScore(score + 1); // update the score
        return;
      }
    }
    setResult("Try Again!");
  }

  return (
    <div className="SlotMachine">
      <div className="Reel">{SYMBOLS[reels[0]]}</div>
      <div className="Reel">{SYMBOLS[reels[1]]}</div>
      <div className="Reel">{SYMBOLS[reels[2]]}</div>
      <button onClick={spin}>Spin</button>
      <div className="Result">{result}</div>
      <div className="Score">Score: {score}</div> {/* display the score */}
    </div>
  );
}

export default SlotMachine;
