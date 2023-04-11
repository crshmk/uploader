import React from 'react'

import useDragDrop from '../useDragDrop.js'

import { isAbsent } from 'utils'

const Preview = () => {
  const { file } = useDragDrop()
  if (isAbsent(file)) return null 

  const src = URL.createObjectURL(file) 
  
  return <img src={src} />
}

export default Preview
