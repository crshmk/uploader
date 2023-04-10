import React from 'react'

import useDragDrop from '../useDragDrop.js'

import { isAbsent } from 'utils'

const Overlay = () => {
  const { onDragEnter, onDragLeave, setFile } = useDragDrop()

  const onDrop = e => {
    const files = e.dataTransfer.files
    if(isAbsent(files)) return 
    setFile(files[0])
  }

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
