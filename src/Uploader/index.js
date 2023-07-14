import React, { useEffect } from 'react' 

import { disableDragDrop, enableDragDrop } from '../disableDragDrop'

import DropTarget from './DropTarget/'
import UploadInstructions from './UploadInstructions'
import { DragDropProvider } from './useDragDrop.js'

import './uploader.css'

const Uploader = ({ onLoad }) => {

  useEffect(() => {
    disableDragDrop() 
    return enableDragDrop
  }, [])

  return (
    <div className="uploader"> 
      <DragDropProvider onLoad={onLoad}>
        <DropTarget />
        <UploadInstructions />
      </DragDropProvider>
    </div>
  )
}

export default Uploader
