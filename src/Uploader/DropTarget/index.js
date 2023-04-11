import React  from 'react'

import DropInstructions from './DropInstructions'
import Overlay from './Overlay'
import Preview from './Preview'

import useDragDrop from '../useDragDrop'

import { isPresent } from 'utils'

const useDropTargetClassName = () => {
  const { file, isDragging } = useDragDrop()
  return [
    'drop-target',
    (isDragging ? 'is-dragging' : ''), 
    (isPresent(file) ? 'has-file' : '')
  ]
    .filter(isPresent)
    .join(' ')
}

const DropTarget = () => {
  const dropTargetClass = useDropTargetClassName()

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
