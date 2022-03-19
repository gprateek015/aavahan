import React from 'react'
import Homebg from '../../assets/galaxy.jpg';
import About from '../../components/about/About';

import './home.styles.scss'
import Introductory from '../../components/intoductory_section/Introductory';

const Home = () => {
  return (
      <>
    <img src={Homebg} alt="" id='Rbg'/>
    <div className='RaagDiv container-fluid'>
                <div className='row'>
                    <div className='rcg col-md-12 col-lg-6 col-xl-6'>
                        <p> <span>Antariksha</span> <br />The Club of space</p>
                        <section>The Antariksha club aim to explore different phenomena <br /> going in space. Helps the student to know about <br /> Agencies like NASA and ISRO.</section>
                        <img src={Homebg} alt="..." />
                    </div>
                    <div className='rmg col-md 12 col-lg-6 col-xl-6'>
                        <img style={{ opacity: 0.7 }} src={Homebg} alt="..." id='Rgmg' />
                    </div>
                </div>
            </div>
            <Introductory/>
            <About
                image={Homebg}
                bgcolor="purple"
                content="The main aim of the club is to engage students in various art forms based upon their interests.It organizes events related to festivals 
                and some special occasions. 'Winter is here' is conducted every year in the month of December. '#Eco Kari' is another annual event
                 being organized by the aesthete club on the occasion of World Environment Day .
                The club al so wishes to organize workshops to enhance the skills of the flourishing artists."
            />
      </>
  )
}

export default Home