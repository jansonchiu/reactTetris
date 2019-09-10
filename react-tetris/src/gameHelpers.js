export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/** Function to create stage with stage height and width*/
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => 
    //Use inline fucntion to create array
    new Array(STAGE_WIDTH).fill([0,'clear'])
  )

// Should you use a for loop or for each
// better than for each because you can get out when there is a collision 

/** Function to check collision  */
export const checkCollision = (player, stage, {x: moveX, y: moveY}) => { 
  for( let y = 0; y < player.tetromino.length; y+=1) { 
    for( let x= 0; x < player.tetromino[y].length; x += 1) { 
      // Check that we're on an actual tetromino cell 
      if( player.tetromino[y][x] !== 0) { 
        if(
        // Check that our move is inside the game area's height (y)
        // We shouldnt' go through the bottom of the play area 
        !stage[y+player.pos.y + moveY] || 
        // Check that our move is inside the game area's width (x) 
        // We shouldn't go through the sides of the play area 
        !stage[y+player.pos.y+moveY][x+player.pos.x + moveX] ||
        // Check that our cell is we're moving to isn't set to clear
        // If it is clear, we are not colliding
        stage[y+player.pos.y+moveY][x+player.pos.x+moveX][1] !=='clear'
        ) { 
          return true;
        }
      }
    }
  }
}