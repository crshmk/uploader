import React, { createContext, useContext, useEffect, useState } from 'react' 

const DragDropContext = createContext() 

import { isAbsent } from 'utils'

const useDragDrop = () => useContext(DragDropContext)

export const DragDropProvider = props => {
  const [file, setFile] = useState({})
  const [isDragging, setIsDragging] = useState(false)

  const onDragEnter = () => setIsDragging(true)
  const onDragLeave = () => setIsDragging(false)

  const onDrop = e => {
    setIsDragging(false)
    const files = e.dataTransfer.files
    if(isAbsent(files)) {
      console.log('is this ever empty', files)
      return 
    }
    const file = [...files][0]
    setFile(file)
  }

  const ctx = {
    file, 
    isDragging,
    onDragEnter,
    onDragLeave,
    onDrop
  }

  return (
    <DragDropContext.Provider value={ctx}>
    {props.children}
    </DragDropContext.Provider>
  )
}

export default useDragDrop
