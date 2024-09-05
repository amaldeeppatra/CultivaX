import React from 'react'
import './uploadImage.css'

const UploadImage = () => {
  return (
    <>
    <h1 className='uploadImage'>Upload Image to get Crop Analysis</h1>
    <input type="file" className='uploadBtn'/>
    </>
  )
}

export default UploadImage