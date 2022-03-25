import React from 'react'
import './slider.scss'
import Img from '../../assets/av7.jpg'

const Slider = (props) => {
    return (
        <>
            <div className='slider' id='Sponsorships'>
                <h1>{props.name}</h1>
                <div className='slider_track'>

                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand<br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>

                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='com'>
                        <div className='box'>
                            <img src={Img} alt="" />
                            <p>Anand <br />
                                <span>Designation</span>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Slider