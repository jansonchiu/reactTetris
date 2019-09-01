export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/** Function to create stage with stage height and width*/
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => 
    //Use inline fucntion to create array
    new Array(STAGE_WIDTH).fill([0,'clear'])
  )