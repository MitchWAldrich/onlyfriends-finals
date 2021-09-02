import React, { useState } from 'react';


export default function useCardMode() {

  const NAME = 'NAME';

  const [mode, setMode] = useState(NAME);
  const [history, setHistory] = useState([NAME]);

  const newHistory = [...history];
  
  const next = (newMode) => {
    setHistory(() => [...newHistory, newMode]);
    setMode(newMode);
  }

  const back = () => {
    if (newHistory.length > 1) {
      newHistory.pop();
    }
     setHistory(() => [...newHistory]);
     setMode(newHistory[newHistory.length - 1]);
  }

  return { mode, setMode, next, back }
};