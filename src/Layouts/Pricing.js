import React from 'react'
import css from '../Pages/Home.css'


const Pricing = () => {
  return (
    <>
    
    <div className="row">
            <div className="col-3">
              <div className="rate-box">
                <div style={{ background: '#0e99ce' }} className="rate-heading">
                  <h5>Single Room</h5>
                </div>
                <div style={{ background: '#00acee' }} className="outer-box">
                  <div className="price">
                    <h3 className='dosis'>
                      <span>$</span>
                      79
                    </h3>
                    <p>1 NIGHT</p>
                  </div>
                </div>
                <div className="rating">
                  <ul style={{ listStyleType: "none", display: 'flex', padding: '0', margin: '0', marginTop: '30px', justifyContent: 'center' }}>
                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  </ul>
                  <div class="bed text-center">
                    <i style={{ color: '#00acee' }} class="fa fa-bed" aria-hidden="true">
                    </i>
                  </div>
                  <div class="pricing-btn pt-3 pb-4">
                    <a style={{ background: '#0e99ce' }} href='#' class="scroll">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rate-box">
                <div style={{ background: '#fbbe09' }} className="rate-heading">
                  <h5>THE COTTAGE</h5>
                </div>
                <div style={{ background: '#ffcc33' }} className="outer-box">
                  <div className="price">
                    <h3 className='dosis'>
                      <span>$</span>
                      119
                    </h3>
                    <p>1 NIGHT</p>
                  </div>
                </div>
                <div className="rating">
                  <ul style={{ listStyleType: "none", display: 'flex', padding: '0', margin: '0', marginTop: '30px', justifyContent: 'center' }}>
                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  </ul>
                  <div class="bed text-center">
                    <i style={{ color: '#ffcc33' }} class="fa fa-bed" aria-hidden="true">
                    </i>
                  </div>
                  <div class="pricing-btn pt-3 pb-4">
                    <a style={{ background: '#ffcc33' }} href='#' class="scroll">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rate-box">
                <div style={{ background: '#209a20' }} className="rate-heading">
                  <h5>Guest House</h5>
                </div>
                <div style={{ background: '#2baf2b' }} className="outer-box">
                  <div className="price">
                    <h3 className='dosis'>
                      <span>$</span>
                      159
                    </h3>
                    <p>1 NIGHT</p>
                  </div>
                </div>
                <div className="rating">
                  <ul style={{ listStyleType: "none", display: 'flex', padding: '0', margin: '0', marginTop: '30px', justifyContent: 'center' }}>
                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  </ul>
                  <div class="bed text-center">
                    <i style={{ color: '#2baf2b' }} class="fa fa-bed" aria-hidden="true">
                    </i>
                  </div>
                  <div class="pricing-btn pt-3 pb-4">
                    <a style={{ background: '#2baf2b' }} href='#' class="scroll">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="rate-box">
                <div style={{ background: '#f72d05' }} className="rate-heading">
                  <h5>THE SEA VILLA</h5>
                </div>
                <div style={{ background: '#ff401b' }} className="outer-box">
                  <div className="price">
                    <h3 className='dosis'>
                      <span>$</span>
                      119
                    </h3>
                    <p>1 NIGHT</p>
                  </div>
                </div>
                <div className="rating">
                  <ul style={{ listStyleType: "none", display: 'flex', padding: '0', margin: '0', marginTop: '30px', justifyContent: 'center' }}>
                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                  </ul>
                  <div class="bed text-center">
                    <i style={{ color: '#ff401b' }} class="fa fa-bed" aria-hidden="true">
                    </i>
                  </div>
                  <div class="pricing-btn pt-3 pb-4">
                    <a style={{ background: '#ff401b' }} href='#' class="scroll">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Pricing