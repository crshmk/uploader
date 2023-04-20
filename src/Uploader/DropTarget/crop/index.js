/**
  * - draw a loaded image onto an unmounted canvas to crop it 
  * - create a dataUrl from the canvas 
  * - use a ref to set the preview img element's src attribute
  * - hand the dataUrl and a Blob to on onLoad callback passed into the api 
  *
  * @param {React ref} ref 
  * @param {File} file
  *
  * @return void
**/
import createCanvas from './createCanvas'

function crop(ref, file) {
  return new Promise(resize => {
    const loadedImage = new Image()

    loadedImage.onload = () => {
      const canvas = createCanvas(loadedImage)
      const dataUrl = canvas.toDataURL('image/jpeg')
      ref.current.src = dataUrl
      resize(canvas)
    }

    const url = URL.createObjectURL(file) 
    loadedImage.src = url
    return url
  })
}
export default crop
