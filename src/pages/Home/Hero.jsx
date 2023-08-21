import React from 'react';
import homeVideo1 from '../../assets/images/home Video-1.gif';
import intendenicon from '../../assets/images/intenden-icon.png';
const Hero = () => {
  return (
    <>
          <section class="maine-banner">
         <div className="container">
            <div className="row">
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xll-6">
                  <div className="maine-banner-inner " data-aos="fade-up">
                     <h2>Connect with Right
                        <span class="yellow-title">Decision</span> Makers
                     </h2>
                     <h5>Our AI-Powered marketing and psychometric analysis help you to unlock more Meaningful connections</h5>
                     <ul className="d-flex">
                        <li> <img src={intendenicon} className="img-fluid" alt="" />Active Leads</li>
                        <li> <img src={intendenicon} className="img-fluid" alt="" />Virtual CXOs</li>
                        <li> <img src={intendenicon} className="img-fluid" alt="" />Jobs   </li>
                        <li> <img src={intendenicon} className="img-fluid" alt="" />Fund Raise</li>
                     </ul>
                     <a className="btn-lead" href="#">Join Now For Free</a>
                  </div>
               </div>
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xll-6">
                  <div className="maine-banner-left" data-aos="fade-down">
                     <img src={homeVideo1} alt='home Video-1.gif' />
                  </div>
               </div>
            </div>
         </div>
      </section>

    </>
  )
}

export default Hero