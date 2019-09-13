import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => { 
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200]; 

  // useCallback stops it from being a infinite loop 
  const calcScore = useCallback(() => { 
    //We have score 
    if(rowsCleared>0){ 
      //This is calculated with the original tetris
      setScore(prev => prev + linePoints[rowsCleared - 1]* (level +1));
      setRows(prev => prev + rowsCleared);

    }
  }, [level, linePoints, rowsCleared]); // need dependencies because of useCallback

  useEffect(() => { 
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
}