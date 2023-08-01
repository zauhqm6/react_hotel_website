import React from 'react'
import css from '../Pages/gallery.css'

const GalleryImg = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className='grid'>

                    <figure className='effect-apollo'>
                        <img className='w-100' src={props.imgsrc} alt="" />
                        <figcaption>
                            <p>{props.title1}<br></br>
                                <span>{props.title2}</span>
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>


        </>
    )
}

export default GalleryImg