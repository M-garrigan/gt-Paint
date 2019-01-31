
export const setShape = shape => {
  return {
    type: 'SET_SHAPE',
    shape
  }
};

export const setShapeAttributes = event => {
  return {
    type: 'SET_SHAPE_ATTRIBUTES',
    event
  }
};