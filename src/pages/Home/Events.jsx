import React from 'react'
import event2 from '../../assets/images/event-2.png';
import event1 from '../../assets/images/event-1.png';
// import "../../components/Navbar/Navbar.css"
import Slider from "react-slick";

export const Events = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
 <>
     <section className="testimonials testimonialss">
         <div className="container" data-aos="zoom-in-right">
            <h3>Events </h3>
            {/* <!-- Swiper --> */}
            <div className="swiper mySwipertt">
               <div className="swiper-wrapper">
               <Slider {...settings}>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <img src={event2}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                        <div className="testimonials-box-right">
                           <img src={event1}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <img src={event2}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                        <div className="testimonials-box-right">
                           <img src={event1}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <img src={event2}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                        <div className="testimonials-box-right">
                           <img src={event1}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="testimonials-box d-flex">
                        <div className="testimonials-box-left">
                           <img src={event2}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
                           </div>
                        </div>
                        <div className="testimonials-box-right">
                           <img src={event1}/>
                           <div className="tech-box">
                              <h5>Techspo NCR 2023 Technology Expo</h5>
                              <h6>August 24,2023- 09:00 AM</h6>
                              <a className="btn-dtl" href="#">Details</a>
                              <a className="btn-dtl" href="#">Attend</a>
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
