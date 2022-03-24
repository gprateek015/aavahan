import React from 'react'
import './aavahan2k19.scss'
import Silder2 from '../../components/slider2/Silder2';

import img0 from '../../assets/galaxy.png'
import bgmain from '../../assets/bgmain3.png'


const Aavahan2k19 = () => {
  return (
    <>

      <img src={img0} alt="" id='Rbg' />
      <img src={bgmain} alt="" id='Rbg2' />

      <div className='MainDiv'></div>

      <Silder2
        name="Past Sponsors"
      />

    </>
  )
}

export default Aavahan2k19