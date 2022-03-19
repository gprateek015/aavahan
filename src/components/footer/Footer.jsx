import React from 'react'
import './footer.scss'

import Mail from '@material-ui/icons/Email';
import Facebook from '@material-ui/icons/Facebook';
import Insta from '@material-ui/icons/Instagram';
import WhatsApp from '@material-ui/icons/WhatsApp';

const Footer = () => {
    return (
        <>
            <div class="container-fluid mt-5 px-0" id='cardcontainer'>
    <div class="card w-100">
        <div class="row mb-4">
            <div class="col-md-4 col-sm-4 col-xs-4">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                        <h1 style={{color: 'black'}}>Aavahan</h1>
                    </div>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div class="social mt-2 mb-3"> <i class="fa fa-facebook-official fa-lg"><Facebook/></i> <i class="fa fa-instagram fa-lg"><Insta/></i> <i class="fa fa-twitter fa-lg"><WhatsApp/></i> <i class="fa fa-facebook"><Mail /></i> </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2"></div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Services</h5>
                <ul>
                    <li>IT Consulting</li>
                    <li>Development</li>
                    <li>Cloud</li>
                    <li>Support</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Industries</h5>
                <ul class="card-text">
                    <li>Finance</li>
                    <li>Public Sector</li>
                    <li>Smart Office</li>
                    <li>Retail</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
                <h5 class="heading">Company</h5>
                <ul class="card-text">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style={{fontSize:"10px"}}>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p style={{fontWeight: '600', fontSize:'12px'}}>2022 AAVAHAN</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-right mr-4 d-flex policy">
                    <div style={{fontWeight: '600', fontSize:'12px'}}>Terms of Use</div>
                    <div style={{fontWeight: '600', fontSize:'12px'}}>Privacy Policy</div>
                    <div style={{fontWeight: '600', fontSize:'12px'}}>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Footer