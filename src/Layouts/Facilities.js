import React from 'react'
import css from '../Pages/Home.css'


const Facilities = (props) => {
    return (
        <>
            <div className="facility flex-column d-flex p-4 gap-2 justify-content-center align-items-center col-3">
                <div>
                    <i class={props.icon} aria-hidden="true"></i>
                </div>
                <div>
                    <h5 style={{ textTransform: 'uppercase', letterSpacing: '3px' }} className='orange-text dosis'>{props.facility}</h5>
                </div>
            </div>
        </>
    )
}

export default Facilities