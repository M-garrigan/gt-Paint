export const setCanvasDimensions = canvas => {
  return {
    type: 'SET_CANVAS_DIMENSIONS',
    canvas: canvas
  }
};

export const setMouseDownCoordinates = mouseDown => {
  return {
    type: 'CANVAS_MOUSE_DOWN_COORDINATES',
    canvasMouseDownCoordinates: mouseDown
  }
};

export const setMouseUpCoordinates = mouseUp => {
  return {
    type: 'CANVAS_MOUSE_UP_COORDINATES',
    canvasMouseUpCoordinates: mouseUp
  }
};