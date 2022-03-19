import React from 'react'
import './introductory.scss'

const Introductory = () => {
  return (
    <div className='video'>
      <h1>introductory video</h1>
      <iframe src="https://youtube.com/watch?v=y2tEPmwWEiI&list=RDMMy2tEPmwWEiI&start_radio=1" frameborder="0"></iframe>
    </div>
  )
}

export default Introductory