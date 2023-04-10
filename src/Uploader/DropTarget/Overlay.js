import React from 'react'

import useDragDrop from '../useDragDrop.js'

const Overlay = () => {
  const { onDragEnter, onDragLeave, onDrop } = useDragDrop()

  return (
    <div 
      className="overlay"
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={() => {}}
      onDrop={onDrop}
    >
    </div>
  )
}

export default Overlay
