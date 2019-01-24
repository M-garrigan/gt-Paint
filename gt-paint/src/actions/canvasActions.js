export const setCanvasDimensions = canvas => {
  return {
    type: 'SET_CANVAS_DIMENSIONS',
    canvas: canvas
  }
};

export const canvasClickCoordinates = canvas => {
  return {
    type: 'CANVAS_CLICKED_COORDINATES',
    canvasClickedCoordinates: canvas
  }
};