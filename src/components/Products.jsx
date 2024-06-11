import React from 'react'
import line from '../img/_.png'
import nav1 from '../img/Combined-Shape.png'
import nav2 from '../img/nav item.png'
import logo from '../img/WhatsApp Image 2024-05-13 at 5.38.05 AM.jpeg'
import search from '../img/search.png'
import icon1 from '../img/i1.png'
import icon2 from '../img/i3.png'
import icon3 from '../img/i2.png'
import plus from '../img/plus.png'
import pro1 from '../img/Frame 1000005447.png'
import pro2 from '../img/Frame 1000005447 (1).png'
import pro3 from '../img/Frame 1000005447 (2).png'
import pro4 from '../img/Frame 1000005447 (3).png'
import pro5 from '../img/Frame 1000005447 (4).png'
import pro6 from '../img/Frame 1000005447 (5).png'
import pro7 from '../img/Frame 1000005447 (6).png'
import pro8 from '../img/Frame 1000005447 (7).png'
import pro9 from '../img/Frame 1000005447 (8).png'
import pro10 from '../img/Frame 1000005447 (9).png'
import pro11 from '../img/Frame 1000005447 (11).png'
import pro12 from '../img/Frame 1000005447 (10).png'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import Marquee from 'react-fast-marquee'
import right from '../img/Frame 48095395.png'
import { Link } from 'react-router-dom'



export default function Products() {
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
            <div className="d-flex gap-5 px-5">
                <div className='d-flex flex-column gap-3'>
                    <div className='box-l-1'>
                        <h4 className='d-flex align-items-center gap-3'><img src={line} alt="" /><span>Categories</span></h4><br />
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn color dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Lorem ipsum (3) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='box-l-2'>
                        <h4 className='d-flex align-items-center gap-3'><img src={line} alt="" /><span>Price  Range</span></h4><br />
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>$20.00 - $ 50.00</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>$20.00 - $ 50.00</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>$20.00 - $ 50.00</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>$20.00 - $ 50.00</span></p>
                    </div>
                    <div className='box-l-2'>
                        <h4 className='d-flex align-items-center gap-3'><img src={line} alt="" /><span>Size</span></h4><br />
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Small</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Medium</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Large</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>XL-2XL</span></p>
                    </div>
                    <div className='box-l-2'>
                        <h4 className='d-flex align-items-center gap-3'><img src={line} alt="" /><span>Color</span></h4><br />
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Black</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>White</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Blue</span></p>
                        <p className='d-flex gap-3'> &nbsp; &nbsp; <input type='checkbox' /> <span>Red</span></p>
                    </div>
                </div>
                <div className='w-100'>
                    <h3 className='title'>Our Collection Of Products</h3>
                    <div className='position-relative mb-3'>
                        <input type="search" id="inputPassword5" class="form-control input-p" aria-describedby="passwordHelpBlock" placeholder='Search An Item'></input>
                        <img src={search} alt="" className='se' />
                    </div>
                    <div>
                        <p className='p-p-r'>Showing 1–12 of 24 item(s)</p>
                        <p className='p2-p-r'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
            <div className="d-flex gap-3 flex-wrap">
                <div class="card mycard mycard-p position-relative mb-3">
                    <img src={pro1} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Black jacket</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative mb-3">
                    <img src={pro2} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Black jacket</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative mb-3">
                    <img src={pro3} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Black jacket</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative mb-3">
                    <img src={pro4} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Double Bed & Side Tables</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro5} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Red Shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro6} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Black jacket</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro7} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Gray shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro8} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Blue jacket</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro9} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>White shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro10} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Yellow Suit</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro11} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Blue Shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard mycard-p position-relative">
                    <img src={pro12} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Brown Coat </h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

                    </div>

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
