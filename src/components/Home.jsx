import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/Untitled-1 2.png'
import search from '../img/search.png'
import nav1 from '../img/nav-1.png'
import nav2 from '../img/nav-2.png'
import box1 from '../img/box1.png'
import box2 from '../img/box2.png'
import box3 from '../img/box3.png'
import icon1 from '../img/i1.png'
import icon2 from '../img/i3.png'
import icon3 from '../img/i2.png'
import plus from '../img/plus.png'
import img1 from '../img/im1.png'
import img2 from '../img/im2.png'
import img3 from '../img/im3.png'
import img4 from '../img/im4.png'
import toright from '../img/toright.png'
import pro1 from '../img/pro1.png'
import pro2 from '../img/pro2.png'
import pro3 from '../img/pro3.png'
import pro4 from '../img/pro4.png'
import pro5 from '../img/pro5.png'
import pro6 from '../img/pro6.png'
import pro7 from '../img/pro7.png'
import pro8 from '../img/pro8.png'
import secion from '../img/section.png'
import prod1 from '../img/prod1.png'
import prod2 from '../img/prod2.png'
import prod3 from '../img/prod3.png'
import per1 from '../img/per1.png'
import per2 from '../img/per2.png'
import per3 from '../img/per3.png'
import polit from '../img/polit.png'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import Marquee from 'react-fast-marquee'
import right from '../img/Frame 48095395.png'
import line from '../img/_.png'
import '../App.css'
export default function Home() {
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
                    <h3>Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                    <div className='position-relative'>
                        <input type="search" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder='Search An Item'></input>
                        <img src={search} alt="" className='se' />
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <h2 className='px-5 title'>Featured Products</h2>
                <div className="d-flex justify-content-between px-5">
                    <div className='div1'>
                        <h6>Double Bed & Side Tables</h6>
                        <p><del>$230.00</del> $200.00</p>
                    </div>
                    <div class="card mycard position-relative">
                        <img src={box1} class="card-img-top" width='286px' height='360px' alt="..." />
                        <div className="icons d-flex flex-column align-items-center gap-3">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                        </div>
                        <div class="card-body">

                            <div className='div1'>
                                <h6>Double Bed & Side Tables</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p><del className='text-danger'>$230.00</del> $200.00</p>
                                    <img src={plus} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card mycard position-relative">
                        <img src={box2} class="card-img-top" width='286px' height='360px' alt="..." />
                        <div className="icons d-flex flex-column align-items-center gap-3">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                        </div>
                        <div class="card-body">

                            <div className='div1'>
                                <h6>Double Bed & Side Tables</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p><del className='text-danger'>$230.00</del> $200.00</p>
                                    <img src={plus} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card mycard position-relative">
                        <img src={box3} class="card-img-top" width='286px' height='360px' alt="..." />
                        <div className="icons d-flex flex-column align-items-center gap-3">
                            <img src={icon1} alt="" />
                            <img src={icon2} alt="" />
                            <img src={icon3} alt="" />
                        </div>
                        <div class="card-body">

                            <div className='div1'>
                                <h6>Double Bed & Side Tables</h6>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p><del className='text-danger'>$230.00</del> $200.00</p>
                                    <img src={plus} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text my-5'>
                <h3 className='title mt-5'>
                    View Our Range Of Categories
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
            <div className="d-flex my-5 px-5 justify-content-between">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className='d-flex flex-column justify-content-between'>
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className='d-flex align-items-center aside justify-content-between  px-5'>
                <div className='side'>
                    <h6 className='title mb-3'>Most Popular Products</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</p>
                </div>
                <Link to='/product' className="btn btn-primary btn-r d-flex align-items-center gap-3">View All <img src={toright} alt="" /></Link>
            </div>


            <div className="d-flex justify-content-between flex-wrap px-5">
                <div class="card mycard position-relative mb-3">
                    <img src={pro1} class="card-img-top" width='286px' height='360px' alt="..." />
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
                <div class="card mycard position-relative mb-3">
                    <img src={pro2} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Shoes Nike </h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard position-relative mb-3">
                    <img src={pro3} class="card-img-top" width='286px' height='360px' alt="..." />
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
                <div class="card mycard position-relative mb-3">
                    <img src={pro4} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Cotton grey t-shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard position-relative">
                    <img src={pro5} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Women Suit</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard position-relative">
                    <img src={pro6} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Green shirt</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mycard position-relative">
                    <img src={pro7} class="card-img-top" width='286px' height='360px' alt="..." />
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
                <div class="card mycard position-relative">
                    <img src={pro8} class="card-img-top" width='286px' height='360px' alt="..." />
                    <div className="icons d-flex flex-column align-items-center gap-3">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                    </div>
                    <div class="card-body">

                        <div className='div1'>
                            <h6 className='text-primary'>Green dress</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><del className='text-danger'>$230.00</del> $200.00</p>
                                <img src={plus} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img src={secion} alt="" className='section' />

            <div className='d-flex align-items-center aside justify-content-between  px-5'>
                <div className='side'>
                    <h6 className='title mb-3'>Latest Ongoing</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</p>
                </div>
                <div className="btn btn-primary btn-r d-flex align-items-center gap-3">Read All Blogs <img src={toright} alt="" /></div>
            </div>


            <div className="d-flex justify-content-between flex-wrap px-5">
                <div class="card mycard mycard1 position-relative mb-3">
                    <img src={prod1} class="card-img-top" width='396px' height='360px' alt="..." />
                    <div class="card-body">
                        <div className="d-flex align-items-center gap-3 w-75">
                            <img src={per1} alt="" />
                            <span className='text-primary'>Mohammed</span>
                            <span className='text-primary'><img src={polit} alt="" /></span>
                            <span className='text-primary'>18 Jan 2022</span>
                        </div>
                        <p>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
                    </div>
                </div>
                <div class="card mycard mycard1 position-relative mb-3">
                    <img src={prod2} class="card-img-top" width='396px' height='360px' alt="..." />
                    <div class="card-body">
                        <div className="d-flex align-items-center gap-3 w-75">
                            <img src={per2} alt="" />
                            <span className='text-primary'>Mohammed</span>
                            <span className='text-primary'><img src={polit} alt="" /></span>
                            <span className='text-primary'>18 Jan 2022</span>
                        </div>
                        <p>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
                    </div>
                </div>
                <div class="card mycard mycard1 position-relative mb-3">
                    <img src={prod3} class="card-img-top" width='396px' height='360px' alt="..." />
                    <div class="card-body">
                        <div className="d-flex align-items-center gap-3 w-75">
                            <img src={per3} alt="" />
                            <span className='text-primary'>Mohammed</span>
                            <span className='text-primary'><img src={polit} alt="" /></span>
                            <span className='text-primary'>18 Jan 2022</span>
                        </div>
                        <p>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
                    </div>
                </div>
            </div><br /><br /><br />

            <div className='d-flex justify-content-between px-5'>
                <div className="side">
                    <h6 className='title mb-3'>Frequently Asked Questions</h6>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                    <div className="btn btn-primary w-content btn-r d-flex align-items-center gap-3">Ask A Question <img src={toright} alt="" /></div>
                </div>
                <div class="accordion w-100" id="accordionExample">
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header" id="headingOne1">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                            </button>
                        </h2>
                        <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
                            <div class="accordion-body light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header" id="headingOne2">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                            </button>
                        </h2>
                        <div id="collapseOne2" class="accordion-collapse collapse show" aria-labelledby="headingOne2" data-bs-parent="#accordionExample">
                            <div class="accordion-body light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header" id="headingOne3">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                            </button>
                        </h2>
                        <div id="collapseOne3" class="accordion-collapse collapse show" aria-labelledby="headingOne3" data-bs-parent="#accordionExample">
                            <div class="accordion-body light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-3">
                        <h2 class="accordion-header" id="headingOne4">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?
                            </button>
                        </h2>
                        <div id="collapseOne4" class="accordion-collapse collapse show" aria-labelledby="headingOne4" data-bs-parent="#accordionExample">
                            <div class="accordion-body light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea                            </div>
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
