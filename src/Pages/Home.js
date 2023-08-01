import React, { useState, useEffect } from 'react'
import Header from '../Layouts/Header'
import css from '../Pages/Home.css'
import Data from '../assets/Data'
import Card from '../Layouts/Card'
import Facilities from '../Layouts/Facilities'
import Pricing from '../Layouts/Pricing'
import Footer from '../Layouts/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  const [toggle, setToggle] = useState(true);

  const imgSwitch = () => {
    setToggle(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  
   }, [])
  

  return (
    <>
      <div className="bg-img">
        <Header />


        <div className="home-content">

          <div className='home-img'>
            <h2>
              Wel<span className='orange-text'>come</span> to <span className='orange-text'>luxury</span> Hotel
            </h2>
            <div className='dark-bg'>
              <h3>Book your dream resort destinations</h3>
            </div>          <p>Enjoy you stay in </p>
          </div>
        </div>
      </div>
      <div className="resorts py-5 text-center">
        <div className="container px-7">
          <div className="text-headings">
            <h3 className='orange-text dosis fw-semibold spacing'>WELCOME TO OUR RESORT!</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ever since the 1500s.Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores hasellusMaecenas ac hendrerit purus. Lorem ipsum dolor sit amet.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>

          <div className="cards">
            <div className="row">
              {Data.map((val, index) => {
                return (
                  <Card
                    key={val.id}
                    imgSrc={val.imgSrc}
                    cardTitle={val.cardTitle}
                    cardText={val.cardText}
                  />
                )
              })}
            </div>

          </div>

          <div className="btn-section mt-4">
            <button>
              <Link to='contact' >Read More</Link>
              
            </button>
          </div>
        </div>
      </div>

      <div className="facilities py-5">
        <div className="section-heading text-center pb-5 dosis">
          <h3>Featured Facilties</h3>
        </div>
        <div className="d-flex flex-wrap f-row">
          <Facilities
            icon="fa fa-cutlery"
            facility="Restuarant"
          />

          <Facilities
            icon="fa fa-glass"
            facility="Bar"
          />

          <Facilities
            icon="fa fa-wheelchair-alt"
            facility="Gym"
          />

          <Facilities
            icon="fa fa-car"
            facility="PICK UP"
          />
        </div>
      </div>
      


      <div className="d-flex">
        <div className="col-6">
          <div className="vid-player">
            <iframe id="player" src="https://www.youtube.com/embed/44fbHx7P-t8?autoplay=1&amp;autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;modestbranding=1&amp;version=3&amp;hl=en_US&amp;rel=0&amp;showinfo=0&amp;hd=1&amp;iv_load_policy=3" width="760" height="570" seamless="seamless" style={{ border: " none;" }} data-gtm-yt-inspected-2="true" title="ABANDONED honeymoon resort (Penn Hills)" __idm_id__="40961"></iframe>
            {toggle ?
              <div className="video-overlay">
                <div className="video-text">
                  <h4 className='dosis'>Watch our Video</h4>
                  <img src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/play-button.png" style={{ cursor: "pointer" }} onClick={imgSwitch} alt="" />
                </div>
              </div>
              : ""

            }
          </div>
        </div>
        <div className="col-6 p-5">
          <div className="why-chose ">
            <h3 className='dosis orange-text fw-semibold '>
              WHY CHOOSE US ?
            </h3>
            <p>Lorem Aenean aliquet nec mi et lacinia. Aliquam maximus iaculis mi, sed efficitur orci efficitur nec.</p>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item pb-2">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Restaurant & Banquets
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapsed" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                  </div>
                </div>
              </div>
              <div class="accordion-item pb-2">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Transportation Included
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
                  </div>
                </div>
              </div>
              <div class="accordion-item pb-2">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    The Best Care For Our Precious Visitors
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.      </div>
                </div>
              </div>
              <div class="accordion-item pb-2">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Pool Deluxe Room
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.      </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div style={{ background: '#f5f5f5' }} className="d-flex">
        <div className="col-6">
          <div className="p-5">
            <div className="h-booking">
              <h3 className='dosis orange-text fw-semibold'>BOOK A RESERVATION</h3>
            </div>
            <div class="book-form">

              <form className='d-flex flex-wrap' action="#" method="post">
                <div class="col-md-6 form-date-w3-agileits">
                  <label><i class="fa fa-user" aria-hidden="true"></i> Name :</label>
                  <input type="text" name="name" placeholder="Your name" required="" />
                </div>
                <div class="col-md-6 form-date-w3-agileits second-agile">
                  <label><i class="fa fa-envelope" aria-hidden="true"></i> Email :</label>
                  <input type="email" name="email" placeholder="Your email" required="" data-temp-mail-org="0" />
                </div>
                <div class="col-md-6 form-date-w3-agileits">
                  <label><i class="fa fa-calendar" aria-hidden="true"></i> Arrival Date :</label>
                  <input name="date" type="date" value="mm/dd/yyyy" />

                </div>
                <div class="col-md-6 form-time-w3layouts second-agile">
                  <label><i class="fa fa-clock-o" aria-hidden="true"></i> Time :</label>
                  <input type="time" />
                </div>
                <div class="col-md-6 form-date-w3-agileits">
                  <label><i class="fa fa-calendar" aria-hidden="true"></i> Departure Date :</label>
                  <input type="date" value="mm/dd/yyyy" required="" class="hasDatepicker" />

                </div>
                <div class="col-md-6 form-time-w3layouts second-agile">
                  <label><i class="fa fa-clock-o" aria-hidden="true"></i> Time :</label>
                  <input type="time" />
                </div>
                <div class="col-md-6 form-left-agileits-w3layouts bottom-w3ls">
                  <label><i class="fa fa-home" aria-hidden="true"></i> Choose a Room :</label>
                  <select class="form-control">
                    <option></option>
                    <option>Standard Double Room</option>
                    <option>Standard Family Room</option>
                    <option>Garden Family Room</option>
                    <option>Deluxe Double Room</option>
                    <option>Executive Junior Suite</option>
                    <option>Maisonette</option>
                  </select>
                </div>
                <div class="col-md-6 form-left-agileits-w3layouts second-agile">
                  <label><i class="fa fa-users" aria-hidden="true"></i> No.of People :</label>
                  <select class="form-control">
                    <option></option>
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>More</option>
                  </select>
                </div>
                <div class="clearfix"> </div>
                <div class="make wow shake" data-wow-duration="1s" data-wow-delay=".5s">
                  <input type="submit" value="Make a Reservation" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6 position-relative">
          <img className='w-100 ' src="https://p.w3layouts.com/demos_new/30-01-2017/resort-demo_Free/1920654907/web/images/33.jpg" alt="" />
          <div className='bgdark'>
            <h3 className='dosis'>BOOK NOW</h3>
          </div>
        </div>
      </div>

      <div className="rate py-5">
        <div className="container pt-3 px-5">
          <h2 class="dosis orange-text fw-semibold text-center ">RATES AND BOOKING</h2>
          <Pricing />
        </div>
      </div>

            <Footer />

    </>

  )
}

export default Home