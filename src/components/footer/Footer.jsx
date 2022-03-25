import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

import Mail from '@material-ui/icons/Email';
import Facebook from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { Copyright } from '@material-ui/icons';

const Footer = () => {
  return (
    <>
      <div
        class='container-fluid mt-5 px-0'
        id='cardcontainer'
        data-aos='fade-up'
      >
        <div class='card w-100'>
          <div class='row mb-4'>
            <div class='col-md-4 col-sm-4 col-xs-4'>
              <div class='footer-text pull-left'>
                <div class='d-flex'>
                  <h1 style={{ color: 'White' }}>Aavahan</h1>
                </div>
                <p class='card-text'>
                  We thereby invite you all to join this nerve racking event
                  full of thrill and adventure and to re-experience the
                  adrenaline rush through your veins.
                </p>
                <div class='social mt-2 mb-3'>
                  {' '}
                  <i class='fa fa-lg'>
                    <Facebook />
                  </i>{' '}
                  <i class='fa fa-lg'>
                    <Insta />
                  </i>{' '}
                  <i class='fa fa-lg'>
                    <WhatsApp />
                  </i>{' '}
                  <i class='fa'>
                    <Mail />
                  </i>{' '}
                </div>
              </div>
            </div>
            <div class='col-md-2 col-sm-2 col-xs-2'></div>
            <div class='col-md-3 col-sm-3 col-xs-3'>
              <h5 class='heading'>Details</h5>
              <ul>
                <li>Games</li>
                <li>
                  <Link to='/events'>Events</Link>
                </li>
                <li>Shedule</li>
                <li>Sponsors</li>
              </ul>
            </div>
            <div class='col-md-3 col-sm-3 col-xs-3'>
              <h5 class='heading'>Aavahan 2019</h5>
              <ul class='card-text'>
                <li>Past Events</li>
                <li>Past Sponsors</li>
                <li>Past Mentors</li>
                <li>History</li>
              </ul>
            </div>
          </div>
          <div class='divider mb-4'> </div>
          <div class='row' style={{ fontSize: '10px' }}>
            <div class='col-md-6 col-sm-6 col-xs-6'>
              <div class='pull-left'>
                <p style={{ fontWeight: '600', fontSize: '12px' }}>
                  <Copyright fontSize='small' /> 2022 AAVAHAN
                </p>
              </div>
            </div>
            <div class='col-md-6 col-sm-6 col-xs-6'>
              <div class='pull-right mr-4 d-flex policy'>
                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                  Terms of Use
                </div>
                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                  Privacy Policy
                </div>
                <div style={{ fontWeight: '600', fontSize: '12px' }}>
                  Cookie Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
