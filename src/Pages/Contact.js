import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import BreadCrumb from '../Layouts/BreadCrumb'
import css from '../Pages/contact.css'

const Contact = () => {
  return (
    <>
      <BreadCrumb
        pagTitle="Contact
      "
      />
      <div className="py-5 ">
        <h2 className='dosis text-center orange-text pb-3'>CONTACT</h2>

        <div className="contact-form container pb-5">
          <form className='px-5 row justify-content-between' action="#">

            <div className="col-md-6 nameText">
              <input className='my-2' type="text" placeholder="Your Name" required=""></input>
              <input className='my-2' type="email" placeholder="Your email" required=""></input>
              <input className='my-3' type="number" placeholder="Your Number" required=""></input>
            </div>

            <div className="col-md-6 c-text">
              <textarea className='my-2' name="" id="" cols="30" rows="8"></textarea>
              <input type="submit" />
            </div>

          </form>

        </div>
        <div className="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14039.825789227594!2d70.3090077638626!3d28.39038338645078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375b17daef86cb%3A0xda2d66844357a703!2sMcDonald&#39;s%20Etihad%20Gardens!5e0!3m2!1sen!2s!4v1683626945754!5m2!1sen!2s" style={{ border: "0", width: '100%', height: '500px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>




      <Footer />
    </>
  )
}

export default Contact