/**
  * - draw a loaded image onto an unmounted canvas to crop it 
  * - create a dataUrl from the canvas 
  * - use a ref to set the preview img element's src attribute
  *
  * @param {React ref} ref 
  * @param {File} file
  *
  * @return void
**/
import createCanvas from './createCanvas'
import setPreviewSrc from './setPreviewSrc'

const onloadTempImage = (ref, loadedImage) => () => {
const canvas = createCanvas(loadedImage)
    setPreviewSrc(ref, canvas)
}

function crop(ref, file) {
  const loadedImage = new Image()

  loadedImage.onload = onloadTempImage(ref, loadedImage)

  const url = URL.createObjectURL(file) 
  loadedImage.src = url
}
export default crop
