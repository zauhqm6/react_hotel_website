import React, { useState } from 'react'
import css from '../Layouts/Header.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {


    const [trigger, setTrigger] = useState(false);

    const toggleField = () => {
        setTrigger(true)
        console.log("Hello")
    }


    const toggleField2 = () => {
        setTrigger(false)
        console.log("Hello")
    }

    return (
        <>
            {console.log(trigger)}
            <div className="header">
                <div className="overlay">
                    <div className='pre-header py-2 px-3' >
                        <div className="row justify-content-between align-items-center">
                            <div className="col-2">
                                <div className="d-flex ">
                                    <div className="facbook">
                                        <a href="#">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="instagram">
                                        <a href="#">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className="twitter">
                                        <a href="#">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                    </div>
                                    <div className="pintereset">
                                        <a href="#">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="d-flex justify-content-evenly">
                                    <div className="col-5">
                                        <div className="d-flex">
                                            <div className='mr-2 phone'>
                                                <i class="fa fa-volume-control-phone"></i>
                                            </div>
                                            <div>
                                                <a href="tel:+090 480 088">+090 480 088</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="d-flex">
                                            <div className='mr-2 mail'>
                                                <i class="fa fa-envelope-o"></i>
                                            </div>
                                            <div>
                                                <a href="mailto:abc@gmail.com">mail@example.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <header className={!trigger ?"b-bot" : "b-bot-r" }>
                        <div className="px-7 ">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col-2">
                                    <div className="logo">
                                        <Link to="/">
                                            <h1>
                                                <span className='blue-t'>R</span>
                                                ESORT
                                                <p>BOOKING</p>
                                            </h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className='nav col-5'>
                                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                                        <li>
                                            <NavLink to='/' className='nav-link'
                                                style={({ isActive }) => (isActive ? { color: '#ff401b' } : { color: '#fffff' })}
                                            >HOME</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about' className='nav-link'
                                                style={({ isActive }) => (isActive ? { color: '#ff401b' } : { color: '#fffff' })}
                                            >ABOUT</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/gallery' className='nav-link'
                                                style={({ isActive }) => (isActive ? { color: '#ff401b' } : { color: '#fffff' })}
                                            >GALLERY</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/contact' className='nav-link'
                                                style={({ isActive }) => (isActive ? { color: '#ff401b' } : { color: '#fffff' })}
                                            >CONTACT</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-1 search-btn">
                                    {!trigger ?

                                        <button onClick={() => toggleField()} type='button'>
                                            <i class="fa fa-search"></i>
                                        </button>

                                        :
                                        <button onClick={() => toggleField2()} type='button'>
                                            <i class="fa fa-times"></i>
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </header>
                    <div  className="input">
                        {trigger ?
                            <input type="search" placeholder='Search' />
                            :
                            ""
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header