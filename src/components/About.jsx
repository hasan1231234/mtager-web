import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Untitled-1 2.png'
import nav1 from '../img/nav-1.png'
import nav2 from '../img/nav-2.png'
import line from '../img/_.png'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import Marquee from 'react-fast-marquee'
import right from '../img/Frame 48095395.png'
import about1 from '../img/Rectangle 19301.png'
import about2 from '../img/Rectangle 19300.png'
import location from '../img/mingcute_location-line.png'

export default function About() {
  return (
    <>
                 <div className="heade d-flex px-5  justify-content-between align-items-center">
                 <p className='text-white fw-bold size'>Free delivery&20%discount</p>
                 <div className='d-flex align-items-center gap-3'>
                    <p className='heade-d'>Until the end of the sale</p>
                    <p className='text-white'><span className='fw-bold fs-3'>88</span> Days </p>
                    <p className='text-white'><span className='fw-bold fs-3'>23</span>  Hours </p>
                    <p className='text-white'><span className='fw-bold fs-3'>12</span>  minutes </p>
                    <p className='text-white'><span className='fw-bold fs-3'>30</span>  sec </p>
                 </div>
            </div>
            <div className="heade1 d-flex px-5 pt-3 justify-content-between align-items-center">
                 <p><Link to='/about'>About Us </Link><img src={line} className='px-5' alt="" />  We deliver to you every day from <span className='text-primary'>7:00 to 23:00</span></p>
                 <div className='d-flex pb-3 gap-5 px-5'>
                    <div class="dropdown">
                        <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            English &nbsp;
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            USD &nbsp;
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="d-flex align-items-center justify-content-around ">
                    <img src={logo} alt="" className='px-5' />
                    <div>
                        <ul className="d-flex align-items-center pt-3 gap-5 text-white">
                            <li>Home</li>
                            <li>
                                <div class="dropdown">
                                    <button class="btn color text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories &nbsp;
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <img src={nav2} alt="" />
                        <img src={nav1} alt="" />
                    </div>
                </div>
                <div className="center text-center d-flex flex-column gap-5">
                    <h3>Do You Want To Know Us?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                </div>
            </div>
            <div className='text-center text my-5'>
                <h3 className='title mb-5 mt-5'>
                Our most famous branches in Egypt
                </h3>
                <p className='para-about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
            </div>


            <div className="d-flex gap-3 py-5 px-5">
               <div>
                  <img src={about1} alt="" className='w-100'/><br /><br />
                  <p className='d-flex align-items-center gap-3'><img src={location} alt="" /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
               </div>
               <div>
                  <img src={about2} alt="" className='w-100'/><br /><br />
                  <p className='d-flex align-items-center gap-3'><img src={location} alt="" /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p>
               </div>
            </div>



            <section className='marque-wrapper  py-5 '>
               <Marquee>
                  <img src={logo1} alt=""  className='mx-5'/>
                  <img src={logo2} alt=""  className='mx-5'/>
                  <img src={logo3} alt=""  className='mx-5'/>
                  <img src={logo4} alt=""  className='mx-5'/>
                  <img src={logo1} alt=""  className='mx-5'/>
                  <img src={logo2} alt=""  className='mx-5'/>
                  <img src={logo3} alt=""  className='mx-5'/>
                  <img src={logo4} alt=""  className='mx-5'/>
               </Marquee>
            </section>

            <div className="footer d-flex flex-column gap-5 text-center">
                 <h2>Subscribe To Your Newsletter to Stay Updated About Discounts</h2>
                 <div className='position-relative w-content btn-f mx-auto'>
                        <input type="search" id="inputPassword5" class="form-control btn-f" aria-describedby="passwordHelpBlock" placeholder='person@email.com'></input>
                        <img src={right} alt="" className='se' />
                    </div><br />
                <div className='d-flex justify-content-between lists'>
                    
                    <ul>
                        <li><h4>Products</h4></li><br />
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <li><h4>Legal Pages</h4></li><br />
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <li><h4>Products</h4></li><br />
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <li><h4>Products</h4></li><br />
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                    </ul>
                    <ul>
                        <li><h4>Legal Pages</h4></li><br />
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum Text</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                        <li className='text-white mb-3'>Lorem Ipsum</li>
                    </ul>
                </div>
                <hr className='bg-white'/>
                <h4 className='text-white fw-bold copy mx-auto'>Copyright © 2023 Renew Bariatrics, Inc </h4><br /><br /><br /><br />
            </div>
    </>
  )
}
