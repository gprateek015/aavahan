import React from 'react'
import './introductory.scss'

const Introductory = () => {



  return (
    <>

      <div className='container intro' data-aos="zoom-in">
        <div className='row'>

          <div className='com-md-6 col-xl-6 col-lg-6 video'>
  
              <iframe width="480" height="300" src="https://www.youtube.com/embed/P79GtHH-hdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          </div>

          <div className='col-md-6 col-xl-6 col-lg-6 contentbox'>
              <p>Sponsors : 30+</p>
              <p>Games : 50+</p>
              <p>Participants : 70+</p>
              <p>Days : 4+</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Introductory