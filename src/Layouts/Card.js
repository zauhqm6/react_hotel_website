import React from 'react'
import css from '../Pages/Home.css'


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 mt-4 col-lg-3">
                <div className="card p-3">
                    <div className="card-start">
                        <img src={props.imgSrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="dosis orange-text card-title">{props.cardTitle}</h5>
                            <p className="card-text">{props.cardText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;