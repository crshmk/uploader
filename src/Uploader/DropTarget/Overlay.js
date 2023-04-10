import React from 'react'

import useDragDrop from '../useDragDrop.js'

const Overlay = () => {
  const { onDrop } = useDragDrop()

  return <div className="overlay" onDrop={onDrop}></div>
}

export default Overlay
