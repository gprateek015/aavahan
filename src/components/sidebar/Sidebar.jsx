import React from 'react'
import './sidebar.scss'

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GroupsIcon from '@material-ui/icons/Group';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-brand m-auto" to=""><span id="college">Aava</span><span id="help">Han</span></div>
                </div>
            </nav>

         <div className='main'>
            <div className="side">
                <p> <Link className='link' to="/"> <HomeIcon /> </Link></p>
                <p> <a className='link' href='/#About'> <InfoIcon /> </a></p>
                <p> <Link className='link' to='/'> <GroupsIcon /> </Link></p>
                <p> <Link className='link' to='/'> <BeenhereIcon /> </Link></p>
                <p> <Link className='link' to='/'> <ContactPhoneIcon /> </Link></p>
            </div>

            <div className="sidebar" id="c">
                <div className="barlink">
                    <p> <Link className='link' to="/"> Home </Link></p>
                    <p> <a className='link' href='/#About'> About </a></p>
                    <p> <Link className='link' to='/'> Teams </Link></p>
                    <p> <Link className='link' to='/'> Sponsorships</Link></p>
                    <p> <Link className='link' to='/'> Contact </Link></p>
                </div>
            </div>
          </div>

        </>
    )
}

export default Sidebar