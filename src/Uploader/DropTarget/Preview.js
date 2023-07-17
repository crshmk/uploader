import React, { useEffect, useRef } from 'react'

import useDragDrop from '../useDragDrop.js'

import crop from './crop'
import resize from './resize'
import { allAbsent, isAbsent } from 'ramjam'

const Preview = () => {
  const ref = useRef(null)
  const { currentUrl, file, onLoad } = useDragDrop()

  useEffect(() => {
    if(isAbsent(file)) return 
    crop(ref, file)
      .then(resize(file.size, onLoad))
  }, [file])

  return allAbsent([currentUrl, file]) ? null : <img ref={ref} src={currentUrl} /> 
}

export default Preview
