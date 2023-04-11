/**
  * - draw a loaded image onto an unmounted canvas to crop it 
  * - create a dataUrl from the canvas 
  * - use a ref to set the preview img element's src attribute
  * - hand the dataUrl to on onLoad callback passed into the api 
  *
  * @param {React ref} ref 
  * @param {File} file
  *
  * @return void
**/
import createCanvas from './createCanvas'

function crop(ref, file) {
  return new Promise((resolve) => {
    const loadedImage = new Image()

    loadedImage.onload = () => {
      const canvas = createCanvas(loadedImage)
      const dataUrl = canvas.toDataURL('image/png')
      ref.current.src = dataUrl
      resolve(dataUrl)
    }

    const url = URL.createObjectURL(file) 
    loadedImage.src = url
    return url
  })
}
export default crop
