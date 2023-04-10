import React, { useEffect } from 'react' 
import { disableDragDrop, enableDragDrop } from '../disableDragDrop'
import { DragDropProvider } from './useDragDrop.js'
import DropTarget from './DropTarget/'

const Uploader = () => {

  useEffect(() => {
    disableDragDrop() 
  //  return enableDragDrop
  }, [])


  return (
    <DragDropProvider>
      <DropTarget />
    </DragDropProvider>
  )
}

export default Uploader
