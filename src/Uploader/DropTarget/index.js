import React, { useState }  from 'react'

import DropInstructions from './DropInstructions'
import Overlay from './Overlay'

import useDragDrop from '../useDragDrop'

const useDropTargetClassName = () => {
  const { isDragging } = useDragDrop()
  return 'drop-target' + (isDragging ? ' is-dragging' : '')
}

const DropTarget = () => {
  const dropTargetClass = useDropTargetClassName()
  const { onDragEnter, onDragLeave, onDrop } = useDragDrop()

  return (
    <div className={dropTargetClass}>
      <div className="bg">
        <DropInstructions />
      </div>
      <Overlay />
    </div>
  )
}

export default DropTarget
