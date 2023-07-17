import React, { useEffect } from 'react' 

import { disableDragDrop, enableDragDrop } from '../disableDragDrop'

import DropTarget from './DropTarget/'
import UploadInstructions from './UploadInstructions'
import { DragDropProvider } from './useDragDrop.js'

const Uploader = ({ currentUrl, onLoad }) => {

  useEffect(() => {
    disableDragDrop() 
    return enableDragDrop
  }, [])

  return (
    <div className="uploader"> 
      <DragDropProvider onLoad={onLoad} currentUrl={currentUrl}>
        <DropTarget />
        <UploadInstructions />
      </DragDropProvider>
    </div>
  )
}

export default Uploader
