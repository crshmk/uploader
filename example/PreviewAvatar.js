import React, { useState } from 'react'

import './uploader.css'

import axios from 'axios'

import Uploader from 'uploader'

const PreviewAvatar = () => {
  const [dataUrl, setDataUrl] = useState('')

  const saveAvatar = () => {
    const payload = { dataUrl }
    axios.post('/avatars', payload)
      .then(console.log)
  }
  
  return (
    <>
    <Uploader onLoad={setDataUrl}/>
    <button onClick={saveAvatar}>Save</button>
    </>
  )
}

export default PreviewAvatar
