import React, { useEffect, useRef } from 'react'

import useDragDrop from '../useDragDrop.js'

import crop from './crop'
import { isAbsent } from 'utils'

const Preview = () => {
  const ref = useRef(null)
  const { file, onLoad } = useDragDrop()

  useEffect(() => {
    if(isAbsent(file)) return 
    // set preview image and execute parent callback
    crop(ref, file).then(onLoad)
  }, [file])

  return isAbsent(file) ? null : <img ref={ref} /> 
}

export default Preview
