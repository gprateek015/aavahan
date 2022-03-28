import RuleCard from '../../components/rule-card/rule-card';
import './rule-box.scss';

import img0 from '../../assets/galaxy.png';
import bgmain from '../../assets/bgmain3.png';
import Footer from '../../components/footer/Footer';

const RuleBox = () => {
  return (
  
    <>

      <img src={img0} alt='' id='Rbg' />
      <img src={bgmain} alt='' id='Rbg2' />

      <h1 className='head'>Rules Section</h1>

      <div className='rule-box container-fluid'>
       <div className='row'>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Futsal' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

       </div>
      </div>


      <div className='rule-box container-fluid'>
       <div className='row'>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Futsal' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

       </div>
      </div>



      <div className='rule-box container-fluid'>
       <div className='row'>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Futsal' />
         </div>

         <div className='col-lg-4 col-xl-4 col-md-4 rule'>
        <RuleCard sport='Cricket' />
         </div>

       </div>
      </div>

   <Footer/>

      </>
  );
};

export default RuleBox;
