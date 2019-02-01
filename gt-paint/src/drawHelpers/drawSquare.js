
export const drawSquare = (snapshot, ref) => {
  let ctx = ref.getContext('2d');
  ctx.fillStyle = snapshot.shapeAttributes.fillColor;
  ctx.lineWidth = +snapshot.shapeAttributes.strokeWidth;
  ctx.strokeStyle = snapshot.shapeAttributes.strokeColor;

  // are mousedown/up different
  const x = snapshot.canvasMouseUpCoordinates.x - snapshot.canvasMouseDownCoordinates.x;
  const y = snapshot.canvasMouseUpCoordinates.y - snapshot.canvasMouseDownCoordinates.y;

  if (x !== 0 || y !== 0) {
    
    ctx.strokeRect(
      snapshot.canvasMouseDownCoordinates.x,
      snapshot.canvasMouseDownCoordinates.y,
      x,
      y
    );

    ctx.fillRect(
      snapshot.canvasMouseDownCoordinates.x,
      snapshot.canvasMouseDownCoordinates.y,
      x,
      y
    );
  } else {
    ctx.strokeRect(
      snapshot.canvasMouseDownCoordinates.x,
      snapshot.canvasMouseDownCoordinates.y,
      +snapshot.shapeAttributes.sizeHeight,
      +snapshot.shapeAttributes.sizeWidth
    );

      ctx.fillRect(
        snapshot.canvasMouseDownCoordinates.x,
        snapshot.canvasMouseDownCoordinates.y,
        +snapshot.shapeAttributes.sizeHeight,
        +snapshot.shapeAttributes.sizeWidth
      );
  }
  console.log('ctx: ', ctx)
  //return ctx;
}

