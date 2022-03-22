import React from 'react'
import './introductory.scss'

const Introductory = () => {
  return (
    <div className='video' data-aos="zoom-in">
    <h1>Introduction</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mS60nG6bJwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  )
}

export default Introductory