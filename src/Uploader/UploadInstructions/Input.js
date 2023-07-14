import React from 'react' 

import useDragDrop from '../useDragDrop.js'

import { isAbsent } from 'ramjam'

const Input = () => {
  const { setFile } = useDragDrop()

  const onChange = e => {
    const files = e.target.files
    if(isAbsent(files)) return 
    setFile(files[0])
  }

  return (
    <label>
      select file
      <input type="file" onChange={onChange} />
    </label>
  )
}

export default Input
