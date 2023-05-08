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
  const [money, setMoney] = useState(5);

  function spin() {

    if (money <= 0) {
      setResult("Game Over!");
      return;
    }

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
          setMoney(money + 5); // update the money
          return;
        }
      } else if (combination.length === 2) {
        if (
          (symbols[0] === symbols[1] && combination.includes(symbols[0])) ||
          (symbols[0] === symbols[2] && combination.includes(symbols[0])) ||
          (symbols[1] === symbols[2] && combination.includes(symbols[1]))
        ) {
          setResult("You Win!");
          setMoney(money + 3); // update the money
          return;
        }
      }
    }
    setResult("Try Again!");
    setMoney(money - 1);
  }

  return (
    <div className="SlotMachine">
      <div className="Reel">{SYMBOLS[reels[0]]}</div>
      <div className="Reel">{SYMBOLS[reels[1]]}</div>
      <div className="Reel">{SYMBOLS[reels[2]]}</div>
      <button onClick={spin}>Spin</button>
      <div className="Result">{result}</div>
      <div className="Money">Money: ${money}</div> {/* display the money */}
    </div>
  );
}

export default SlotMachine;
