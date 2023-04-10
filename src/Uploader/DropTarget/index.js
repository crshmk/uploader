import React, { useState }  from 'react'

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
    <div 
      className={dropTargetClass}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={() => {}}
      onDrop={onDrop}
    >
      <Overlay />
      <p>drop target</p>
    </div>
  )
}

export default DropTarget
