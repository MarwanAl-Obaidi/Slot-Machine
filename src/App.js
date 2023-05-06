import React, { useState } from 'react';
import './App.css';

const SYMBOLS = ["🍒", "🍋", "🍊", "🍇", "🔔", "🍫", "7️⃣"];
const WIN_COMBINATIONS =
[
  ["🍒", "🍒", "🍒"],
  ["🍋", "🍋", "🍋"],
  ["🍊", "🍊", "🍊"],
  ["🍇", "🍇", "🍇"],
  ["🔔", "🔔", "🔔"],
  ["🍫", "🍫", "🍫"],
  ["7️⃣", "7️⃣", "7️⃣"],
  ["🍒", "🍒"],
  ["🍋", "🍋"],
  ["🍊", "🍊"],
  ["🍇", "🍇"],
  ["🔔", "🔔"],
  ["🍫", "🍫"],
  ["7️⃣", "7️⃣"],
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
      if (combination.length === 3) {
        if (symbols.toString() === combination.toString()) {
          setResult("You Win!");
          setScore(score + 1); // update the score
          return;
        }
      } else if (combination.length === 2) {
        if (
          (symbols[0] === symbols[1] && combination.includes(symbols[0])) ||
          (symbols[0] === symbols[2] && combination.includes(symbols[0])) ||
          (symbols[1] === symbols[2] && combination.includes(symbols[1]))
        ) {
          setResult("You Win!");
          setScore(score + 1); // update the score
          return;
        }
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
