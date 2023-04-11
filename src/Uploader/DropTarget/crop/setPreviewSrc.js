/**
  * create a dataUrl from the canvas
  * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
  *
  * use the dataUrl for the src prop on the <img /> with the React ref
  *
  * @param {React ref} ref 
  * @param {HTMLCanvasElement} canvas 
  *
  * @return void
**/ 
const setPreviewSrc = (ref, canvas) => {
  const src = canvas.toDataURL('image/png')
  ref.current.src = src 
}

export default setPreviewSrc
