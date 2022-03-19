import React from 'react'
import './about.scss'

const About = (props) => {
  return (
            <>
            <div className='about Conatiner-fluid' style={{backgroundColor:props.bgcolor}}>
                <div className='row'>
                    <div className='aboutText col-lg-6 col-xl-6'>
                        <h2>About Us</h2>
                        <p>{props.content}</p>
                    </div>
                    <div className='aboutImg col-lg-6 col-xl-6'>
                        <img src={props.image} alt="..." />
                    </div>
                </div>
            </div>
        </>
  )
}

export default About