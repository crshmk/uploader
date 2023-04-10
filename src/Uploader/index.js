import React, { useEffect } from 'react' 
import { disableDragDrop, enableDragDrop } from '../disableDragDrop'

const Uploader = () => {

  useEffect(() => {
    disableDragDrop() 
    return enableDragDrop
  }, [])

  return (
    <p>the upload</p>
  )
}

export default Uploader
