import React, { useRef } from 'react'

import useDragDrop from '../useDragDrop.js'

import crop from './crop'
import { isAbsent } from 'utils'

const Preview = () => {
  const ref = useRef(null)
  const { file } = useDragDrop()

  if (isAbsent(file)) return null 

  crop(ref, file, 1)

  return <img ref={ref} /> 
}

export default Preview