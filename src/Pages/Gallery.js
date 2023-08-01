import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import BreadCrumb from '../Layouts/BreadCrumb'
import css from '../Pages/gallery.css'


const Gallery = () => {
  return (
    <>
      <BreadCrumb
        pagTitle="Gallery"
      />

      <div className="container">
        <div className="py-5 ">
          <h2 className='dosis text-center orange-text pb-3'>GALLERY</h2>
        </div>
        <div className="row flex-wrap pb-5">
          <div className="col-4 ">
            <div className='grid'>

            <figure className='effect-apollo'>
              <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/g8.jpg" alt="" />
              <figcaption>
        <p>Hotel <br></br>
          <span>Resort</span>
        </p>

              </figcaption>
            </figure>
            </div>
          </div>
          <div className="col-4 ">
            <div className='grid'>

            <figure className='effect-apollo'>
              <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/g8.jpg" alt="" />
              <figcaption></figcaption>
            </figure>
            </div>
          </div>
          <div className="col-4 ">
            <div className='grid'>

            <figure className='effect-apollo'>
              <img className='w-100' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/g8.jpg" alt="" />
              <figcaption></figcaption>
            </figure>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>)
}

export default Gallery