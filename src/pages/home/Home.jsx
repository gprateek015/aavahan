import React from 'react'
import Homebg from '../../assets/av4.png';
import foot from '../../assets/foot.png';
import ball from '../../assets/ball.png';
import png from '../../assets/p4.png';
import bgmain from '../../assets/bgmain3.png';
import About from '../../components/about/About';

import './home.styles.scss'
import Introductory from '../../components/intoductory_section/Introductory';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';

const Home = () => {
  return (
      <>
    <img src={Homebg} alt="" id='Rbg'/>
    <img src={bgmain} alt="" id='Rbg2'/>
    <div className='RaagDiv container-fluid'>
                <div className='row'>
                    <div className='rcg col-md-12 col-lg-6 col-xl-6' data-aos="flip-right">
                        <p> <span>Aavahan</span> <br />The Annual sports fest</p>
                        <section>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit saepe,<br /> laborum illum possimus, illo recusandae suscipit<br /> laudantium ex provident quasi ipsum</section>
                        <img src={foot} alt="..."/>
                    </div>
                    <div className='rmg col-md 12 col-lg-6 col-xl-6' data-aos="fade-right">
                        <img src={png} alt="..." id='Rgmg' />
                    </div>
                </div>
            </div>


            <Introductory/>

           <Slider
               name="Our Sponsors"
           />

            <About
                image={ball}
                bgcolor="black"
                content="The main aim of the club is to engage students in various art forms based upon their interests.It organizes events related to festivals 
                and some special occasions. 'Winter is here' is conducted every year in the month of December. '#Eco Kari' is another annual event
                 being organized by the aesthete club on the occasion of World Environment Day .
                The club al so wishes to organize workshops to enhance the skills of the flourishing artists."
            />

          <Slider
              name="Our Mentors"
          />

            <Footer/>
      </>
  )
}

export default Home