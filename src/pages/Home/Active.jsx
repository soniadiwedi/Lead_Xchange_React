import React from 'react'
import main from '../../assets/images/main-bg.png';

export const Active = () => {
  return (
   <>
    <section class="out">
         <div class="container">
            <div class="row">
               <div class="col-md-6" data-aos="zoom-in-right">
                  <div class="out-left">
                     <h3>Select Active <span class="yellow-title">Leads</span> </h3>
                     <p>Generate high-quality leads that have a higher probability  of converting into valuable opportunities.</p>
                     <div class="main-counter d-flex">
                        <div class="counter">
                           <span class="counter-value">15000</span><small>+</small>
                           <h5>Campaign Managed</h5>
                        </div>
                        <div class="counter">
                           <span class="counter-value">15</span><small>+</small>
                           <h5>Years of Experience</h5>
                        </div>
                        <div class="counter">
                           <span class="counter-value">12</span><small>+</small>
                           <h5>Awards winning</h5>
                        </div>
                        <div class="counter">
                           <span class="counter-value">100</span><small>%</small>
                           <h5>Satisfied customers</h5>
                        </div>
                     </div>
                     <a class="btn-lead" href="#">Join Now for Free</a>
                  </div>
               </div>
               <div class="col-md-6" data-aos="zoom-in-left">
                  <div class="out-right">
                     <img src={main} class="img-fluid" alt="images/main-bg.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
  )
}
