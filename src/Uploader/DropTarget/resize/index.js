import Hermite from './Hermite'
var hermite  = new Hermite()

const maxSize = 500

const getMaxSize = fileSize => Math.min(fileSize, maxSize)

const resize = (size, onLoad) => (canvas) => {
  const heightWidth = getMaxSize(size) 
  hermite.resample(canvas, heightWidth, heightWidth, true, () => {
    const dataUrl = canvas.toDataURL('image/jpeg')
    canvas.toBlob(blob => {
      onLoad({ blob, dataUrl })
    }, 'jpeg')
  })
}

export default resize
