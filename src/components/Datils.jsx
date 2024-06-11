import React from 'react'
import line from '../img/_.png'
import nav1 from '../img/Combined-Shape.png'
import nav2 from '../img/nav item.png'
import logo from '../img/WhatsApp Image 2024-05-13 at 5.38.05 AM.jpeg'
import ri from '../img/Chevron Right.png'
import { Link } from 'react-router-dom'
import heart from '../img/Heart.png'
import img from '../img/Frame 1000005521.png'
import line2 from '../img/Vector 219.png'
import stars from '../img/Frame 42.png'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import Marquee from 'react-fast-marquee'
import right from '../img/Frame 48095395.png'
import car from '../img/group.png'
import d from '../img/3d-rotate.png'
import spro from '../img/Frame 1000005498.png'
export default function Datils() {
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
                <div className='d-flex gap-5 px-5'>
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
            <div className="d-flex text-primary mb-5 px-5 align-items-center justify-content-between ">
                <img src={logo} alt=""  width='150' height='120'/>
                <div>
                    <ul className="d-flex text-primary align-items-center pt-3 gap-5 text-white">
                        <li className='text-primary'>Home</li>
                        <li className='text-primary'>
                            <div class="dropdown">
                                <button class="btn color text-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories &nbsp;
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className='text-primary'>Contact Us</li>
                        <li className='text-primary'>Blog</li>
                    </ul>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <img src={nav2} alt="" />
                    <img src={nav1} alt="" />
                </div>
            </div>
            <div className='px-5'>
                <p className='para-da'><span>Product Listing</span> <img src={ri} alt="" />Dummy Product Page</p>
                <div className="d-flex gap-5">
                    <img src={img} alt="" />
                    <div className='w-100'>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <h3>Cotton Shirt</h3>
                            <img src={heart} alt="" />
                        </div><br /> 
                        <p className='d-flex align-items-center gap-3'><span className='price'>$54.98</span> <img src={line2} alt="" /> <img src={stars} alt="" /> ( 32 review )</p><br /><br /><hr />
                        <p className='text-da'>Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. </p>
                        <ul className='list-da'>
                            <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
                        </ul>
                        <div className='d-flex gap-3 align-items-center'>
                            <button className='btn btn-1 d-flex align-items-center gap-3'><span>-</span><span>1</span><span>+</span></button>
                            <button className='btn btn-2'>Add to Cart</button>
                        </div>
                        <button className='btn btn-3'>By Now</button><br /><br />
                        <div className='d-flex gap-3 align-items-center pb-3 co'><img src={car} alt="" /><span>Free worldwide shipping on all orders over $100</span></div>
                        <div className='d-flex gap-3 align-items-center co '><img src={d} alt="" /><span>Delivers in: 3-7 Working Days Shipping & Return</span></div>
                    </div>
                </div>
            </div>
            <div className='section-text-da py-5 px-5 my-5'>
               <div className='d-flex align-items-center gap-3'><h3 className='desc-da'>Description</h3> <img src={line2} alt="" /> <span className='rev-da'>Reviews</span></div><br />
               <p className='desc-text-da'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br />
               <ul className='list-da list-da-1'>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
               </ul>
            </div>


            <div className='px-5 my-5 mt'>
                <h3 className='tit-da'>Similar Products</h3>
                <div className="d-flex justify-content-between align-items-center">
                     <img src={spro} alt="" />
                     <img src={spro} alt="" />
                     <img src={spro} alt="" />
                     <img src={spro} alt="" />
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
