import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage ] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => { 
    setRowsCleared(0);

    const sweepRows = newStage => 
      //implicit returbn 
      newStage.reduce((ack, row) => { 
        // check if rows are merged 
        if (row.findIndex(cell => cell[0] === 0) === -1) { 
          //Add rows to rows cleared state 
          setRowsCleared(prev => prev +1); 
          //add new row(s) on top using unshift 
          ack.unshift( new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        //if not just push it 
        ack.push(row);
        return ack;
      }, [])

    const updateStage = prevStage => { 
      //First flush the stage 
      const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] ==='clear' ? [0, 'clear']: cell)),
      );

      //Draw the tetormino 
      player.tetromino.forEach((row, y) => { 
        row.forEach((value, x) => { 
          if( value!== 0){ 
            newStage[y+player.pos.y][x+player.pos.x] = [ 
              value, 
              `${player.collided ? 'merged': 'clear'}`,
            ];
          }
        });
      });
      // Then check if we collided
      if( player.collided) { 
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    setStage(prev => updateStage(prev))
  // These are the dependencies
  }, [player, resetPlayer]); 

  return [stage, setStage, rowsCleared];
};
