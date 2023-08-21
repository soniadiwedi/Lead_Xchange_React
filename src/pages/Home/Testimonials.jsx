import React from 'react'
import sami from '../../assets/images/sami-img.png';
import Slider from "react-slick";

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  return (
    <>
     <section className="testimonials">
         <div className="container" data-aos="zoom-in-right">
            <h3>Testimonials</h3>
            <p>Sign up for Benchmark today to stay focused on the reason you're using email marketing in the first place: bringing your vision to life.</p>
            {/* <!-- Swiper --> */}
            <div className="swiper mySwipert">
               <div className="swiper-wrapper">
                <Slider {...settings}>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <h4>“Customers and
                              interested parties
                              engaged.”
                           </h4>
                        </div>
                        <div className="testimonials-box-right">
                           <p>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                           <div className="king-box">
                              <img src={sami}/>
                              <h5>King Star</h5>
                              <h6>— Gavin Wieske, Marketing Manager</h6>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <h4>“Customers and
                              interested parties
                              engaged.”
                           </h4>
                        </div>
                        <div className="testimonials-box-right">
                           <p>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                           <div className="king-box">
                              <img src={sami}/>
                              <h5>King Star</h5>
                              <h6>— Gavin Wieske, Marketing Manager</h6>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <h4>“Customers and
                              interested parties
                              engaged.”
                           </h4>
                        </div>
                        <div className="testimonials-box-right">
                           <p>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                           <div className="king-box">
                              <img src={sami}/>
                              <h5>King Star</h5>
                              <h6>— Gavin Wieske, Marketing Manager</h6>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <h4>“Customers and
                              interested parties
                              engaged.”
                           </h4>
                        </div>
                        <div className="testimonials-box-right">
                           <p>“I found it easy to capture my ideas and sketch visuals to sheare with my clints on the go”</p>
                           <div className="king-box">
                              <img src={sami}/>
                              <h5>King Star</h5>
                              <h6>— Gavin Wieske, Marketing Manager</h6>
                           </div>
                        </div>
                     </div>
                  </div>
                  
               </Slider>
               </div>
               <div className="swiper-button-next"></div>
               <div className="swiper-button-prev"></div>
            </div>
         </div>
      </section>
      
    </>
  )
}
