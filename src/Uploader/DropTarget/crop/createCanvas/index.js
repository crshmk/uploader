/**
  * use an unmounted canvas to crop the image 
  * find the x,y points on the loaded image to use as the top left corner of the crop 
  * draw the image from that point at 0,0 on the canvas
  * 
  * @param {HTMLImageElement} loadedImage
  *
  * @return {HTMLCanvasElement}
**/
import getCropPoints from './getCropPoints'
import getDimensions from './getDimensions'

const createCanvas = loadedImage => {
  const dimensions = getDimensions(loadedImage)

  let canvas = document.createElement('canvas')

  canvas.width = dimensions.croppedWidth
  canvas.height = dimensions.croppedHeight

  const { cropX, cropY } = getCropPoints(dimensions)

  const ctx = canvas.getContext('2d')
  ctx.drawImage(loadedImage, cropX, cropY)

  return canvas 
}

export default createCanvas
