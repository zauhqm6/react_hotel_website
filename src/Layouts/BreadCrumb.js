import React from 'react'
import Header from './Header'
import css from './Header.css'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    return (
        <>
            <div className="bread-crumb-overlay">
                <Header />
            </div>
            <div className="bread-crumb-title p-2">
                <div className="home-tag d-flex justify-content-center gap-2 align-items-baseline">
                    <Link style={{color:'#111'}} to='/' >Home </Link>
                    <h6 style={{color:'white'}}>
                        / {props.pagTitle}
                    </h6>
                </div>
            </div>

        </>
    )
}

export default BreadCrumb