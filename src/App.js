import React, { useState } from 'react';

const SYMBOLS = ["cherry", "lemon", "orange", "plum", "bell", "bar", "seven"];

function SlotMachine() {
  const [reels, setReels] = useState([0, 0, 0]);

  function spin() {
    const newReels = [
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
      Math.floor(Math.random() * SYMBOLS.length),
    ];
    setReels(newReels);
  }

  return (
    <div className="SlotMachine">
      <div className="Reel">{SYMBOLS[reels[0]]}</div>
      <div className="Reel">{SYMBOLS[reels[1]]}</div>
      <div className="Reel">{SYMBOLS[reels[2]]}</div>
      <button onClick={spin}>Spin</button>
    </div>
  );
}

export default SlotMachine;
