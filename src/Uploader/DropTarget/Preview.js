import React, { useEffect, useRef } from 'react'

import useDragDrop from '../useDragDrop.js'

import crop from './crop'
import resize from './resize'
import { isAbsent } from 'utils'

const Preview = () => {
  const ref = useRef(null)
  const { file, onLoad } = useDragDrop()

  useEffect(() => {
    if(isAbsent(file)) return 
    crop(ref, file)
      .then(resize(file.size, onLoad))
  }, [file])

  return isAbsent(file) ? null : <img ref={ref} /> 
}

export default Preview
