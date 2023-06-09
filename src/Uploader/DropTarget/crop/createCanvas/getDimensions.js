/**
  * get height and width of the uploaded and cropped images, respectively
  *
  * @param {HTMLImageElement} loadedImage
  *
  * @return (Object} { croppedHeight, croppedWidth, loadedHeight, loadedWidth }
  * 
  * dimension ideas from https://pqina.nl/blog/cropping-images-to-an-aspect-ratio-with-javascript/#cropping-the-image-to-a-square-aspect-ratio
 **/

// square
const croppedAspectRatio = 1

const getLoadedDimensions = loadedImage => {
  const loadedWidth = loadedImage.naturalWidth
  const loadedHeight = loadedImage.naturalHeight
  return { loadedHeight, loadedWidth }
}

const getDimensions = loadedImage => {
  const { loadedHeight, loadedWidth } = getLoadedDimensions(loadedImage)

  let croppedWidth = loadedWidth
  let croppedHeight = loadedHeight

  const loadedAspectRatio = loadedWidth / loadedHeight

  if (loadedAspectRatio > croppedAspectRatio) {
    croppedWidth = loadedHeight * croppedAspectRatio
  } else if (loadedAspectRatio < croppedAspectRatio) {
    croppedHeight = loadedWidth / croppedAspectRatio
  }

  return { croppedHeight, croppedWidth, loadedHeight, loadedWidth }
}

export default getDimensions
