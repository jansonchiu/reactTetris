import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

//Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//Custom Hooks 
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

//components 
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => { 
    
    // drop time is how fast the tetromino drops based on level 
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    //move player function 
    const movePlayer = dir => { 

    }

    const startGame = () => { 

    }

    const drop = () => { 

    }

    /** */
    const dropPlayer = () => { 
      //check if game over 
      if(!gameOver) { 
        if(keyCode === 37) { 
          movePlayer(-1);           //move player to the left 
        } else if (keyCode === 39) {
          movePlayer(1);
        } else if( keycode === 40) { 
          dropPlayer();
        }
      }

    }

    const move = ({ keyCode }) => { 

    }

    return ( 
      <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <StyledTetris>
        <Stage stage={stage} />
        <aside> 
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    );
};

export default Tetris;
