/**
  * get the x and y coords on the loaded image to be drawn at 0, 0 on the canvas
  * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  * 
  * @param {Object} dimensions { croppedHeight, croppedWidth, loadedHeight, loadedWidth }
  *
  * @return {Object} {cropX: Number, cropY: Number}
**/
const getCropPoints = dimensions => {  
  const { 
    croppedHeight, 
    croppedWidth, 
    loadedHeight, 
    loadedWidth 
  } = dimensions 

  const cropX = (croppedWidth - loadedWidth) * 0.5;
  const cropY = (croppedHeight - loadedHeight) * 0.5;
  return { cropX, cropY }
}

export default getCropPoints
