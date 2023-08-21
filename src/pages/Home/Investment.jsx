import React from 'react'
import invest from "../../assets/images/invest-img.png"
export const Investment = () => {
  return (
   <>
    <section className="with" style={{ backgroundImage: `url(${invest})`}} data-aos="fade-up">
         <div class="container">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xll-12">
                  <div className="with-left">
                     <h3>Investment</h3>
                     <h4>Connecting Founders with Investors </h4>
                     <p>Where great businesses and great people meet. We bring together Founders Looking for Investment and investors with the capital, contacts and knowledge to help them suceed.</p>
                     <div className="looking-main d-flex">
                        <div className="looking-main-left">
                           <h5>I’m looking to... </h5>
                        </div>
                        <div className="looking-main-right">
                           <select class="form-select">
                             
                              <option>FundRaise</option>
                              <option>Investment</option>
                           </select>
                        </div>
                     </div>
                     <a className="bgn-now" href="#">Join Now for Free</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
  )
}
