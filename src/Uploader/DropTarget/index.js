import React, { useState }  from 'react'

import DropInstructions from './DropInstructions'
import Overlay from './Overlay'
import Preview from './Preview'

import useDragDrop from '../useDragDrop'

import { isPresent } from 'utils'

const useDropTargetClassName = () => {
  const { isDragging, file } = useDragDrop()
  return 'drop-target' + (isDragging ? ' is-dragging' : '')
}

const DropTarget = () => {
  const dropTargetClass = useDropTargetClassName()
  const {file,  onDragEnter, onDragLeave, onDrop } = useDragDrop()

  const src = isPresent(file) ? URL.createObjectURL(file) : ''

  return (
    <div className={dropTargetClass}>
      <div className="bg">
        <Preview />
        <DropInstructions />
      </div>
      <Overlay />
    </div>
  )
}

export default DropTarget
