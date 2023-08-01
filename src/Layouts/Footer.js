import React, { useState, useEffect } from 'react'
import css from '../Layouts/Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      
       }, [])
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="p-5">
                        <div className="row">
                            <div className="col-md-2 quic">
                                <h4 className='dosis pb-3'> Quick Links</h4>
                                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                    <li>
                                        <Link to='/'> Home </Link>
                                    </li>
                                    <li>
                                        <Link to='/about'> About </Link>
                                    </li>
                                    <li>
                                        <Link to='/gallery'> Gallery </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'> Contact </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 address">
                                <h4 className='dosis pb-3'> Address</h4>
                                <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                    <li>
                                        <p >Mexico United States 3000
                                            40019 Honey Street
                                            BO,Mexico</p>
                                    </li>
                                    <li>
                                        <a href="tel:+1 (734) 123-4567">Telephone : +1 (734) 123-4567</a>
                                    </li>
                                    <li>
                                        <p>
                                            Email : <a href="mailto:info(at)example.com">info(at)example.com</a>
                                        </p>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4 className='dosis pb-3'> INSTAGRAM</h4>
                                <div className="d-flex flex-wrap" >
                                    <div className="col-6">
                                        <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/f1.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/f2.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/f3.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/f4.jpg" alt="" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">
                                <h4 className='dosis pb-3'> CONNECT WITH US</h4>
                                <div className="d-flex social">
                                    <div className="fb">
                                        <a href="#">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="twiter">
                                        <a href="#">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className="pint">
                                        <a href="#">
                                            <i class="fa fa-pinterest"></i>
                                        </a>
                                    </div>
                                    <div className="google">
                                        <a href="#">
                                            <i class="fa fa-google-plus"></i>
                                        </a>
                                    </div>
                                    <div className="drible">
                                        <a href="#">
                                            <i class="fa fa-dribbble"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                            <h4 className='dosis'>NEWSLETTER</h4>
                            <p>Subscribe to our newsletter and we will inform you about newest projects and promotions</p>
                            <div>
                                <form action="#" method="post" className='newsletter1'>
                                    <input class="email" type="email" placeholder="Your email address..." required="" data-temp-mail-org="1" />
                                    <input type="submit" class="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="afterFooter">
                    <p>© 2017 Resort. All rights reserved | Design by <a href="https://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>

        </>
    )
}

export default Footer