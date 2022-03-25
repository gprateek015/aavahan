import React from 'react'
import './about.scss'
import Button from '@material-ui/core/Button';

const About = (props) => {
  return (
            <>
            <div id='About'></div>
            <div className='about Conatiner-fluid' data-aos="fade-up">
                <div className='row'>
                    <div className='aboutText col-lg-6 col-xl-6' data-aos="fade-right">
                        <h2>About Us</h2>
                        <p>{props.content}<br/>
                        <Button variant="outlined" href='/2k19' className='button'>more</Button>
                        </p>
                    </div>
                    <div className='aboutImg col-lg-6 col-xl-6'>
                        {/* <img src={props.image} alt="..." /> */}
                    </div>
                </div>
            </div>
        </>
  )
}

export default About