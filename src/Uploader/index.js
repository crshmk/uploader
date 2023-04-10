import React, { useEffect } from 'react' 

import { disableDragDrop, enableDragDrop } from '../disableDragDrop'

import DropTarget from './DropTarget/'
import UploadInstructions from './UploadInstructions'
import { DragDropProvider } from './useDragDrop.js'

const Uploader = () => {

  useEffect(() => {
    disableDragDrop() 
    return enableDragDrop
  }, [])

  return (
    <div className="uploader"> 
      <DragDropProvider>
        <DropTarget />
        <UploadInstructions />
      </DragDropProvider>
    </div>
  )
}

export default Uploader
