import React, { createContext, useContext, useState } from 'react' 

const DragDropContext = createContext() 

const useDragDrop = () => useContext(DragDropContext)

const noop = () => {}

export const DragDropProvider = props => {
  const [file, _setFile] = useState({})
  const [isDragging, setIsDragging] = useState(false)

  const onDragEnter = () => setIsDragging(true)
  const onDragLeave = () => setIsDragging(false)

  const setFile = file => {
    _setFile(file) 
    setIsDragging(false)
  }

  const onLoad = props.onLoad || noop

  const ctx = {
    currentUrl: props.currentUrl,
    file, 
    isDragging,
    onDragEnter,
    onDragLeave,
    onLoad,
    setFile
  }

  return (
    <DragDropContext.Provider value={ctx}>
    {props.children}
    </DragDropContext.Provider>
  )
}

export default useDragDrop
