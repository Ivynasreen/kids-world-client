import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"> <img src="https://yt3.ggpht.com/ytc/AAUvwngIujx6PfMv0OsYFTgGQ7N3V9xfedK1Qnaj9xNm=s900-c-k-c0x00ffffff-no-rj" alt="" width="120"/></a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link style = {{textDecoration: 'none'}}to = "/home"><a class="nav-link me-5 text-brand" href="#">Home</a></Link>
                </li>
                <li class="nav-item">
                 <Link to ="/about" class="nav-link me-5 text-brand"  style ={{textDecoration: 'none'}}>About</Link>
                </li>
                <li class="nav-item">
                    <Link style = {{textDecoration: 'none'}}to = "/dashboard" class="nav-link me-5 text-brand">Dashboard</Link>
                </li>
                <li class="nav-item">
                    <Link to = "/contact" class="nav-link me-5 text-brand"  style ={{textDecoration: 'none'}}>Contact</Link>
                </li>
                <li class="nav-item  login">
                    <Link to="/login" class="nav-link me-5 text-brand btn btn-danger text-white" style ={{textDecoration: 'none'}}>Login</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;