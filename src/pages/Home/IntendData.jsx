import React from 'react'
import inten from '../../assets/images/intendenw-icon.png';
import intend from '../../assets/images/intend.png';

export const IntendData = () => {
  return (
    <>
     <section id="Intent"class="have">
         <div class="container">
            <div class="row">
               <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xll-7" data-aos="zoom-out-up">
                  <div class="have-right">
                     <h3>Intend Data </h3>
                     <p>In a saturated market where differentiation is challenging, it can be difficult to distinguish genuine purchase intent data from the noise. LeadXchange Intend Engine remains at the forefront of intent solutions in B2B tech because of the following reasons:</p>
                     <ul>
                        <li> <img src={inten} class="img-fluid" alt="images/intendenw-icon.png"/>Behavior Insight : Gain invaluable insights into the specific topics your most promising prospects are researching, the technologies they are considering, and the vendors they are evaluating. This knowledge empowers you to tailor your outreach efforts with a more personalized and effective approach.</li>
                        <li> <img src={inten} class="img-fluid" alt="images/intendenw-icon.png"/>Most active audience of registered buyers</li>
                        <li> <img src={inten} class="img-fluid" alt="images/intendenw-icon.png"/>Largest B2B network of proprietary intent </li>
                     </ul>
                     <a class="btn-lead" href="#">Join Now for Free</a>
                  </div>
               </div>
               <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xll-5" data-aos="zoom-out-down">
                  <div class="have-left">
                     <img src={intend} class="img-fluid" alt="images/intend.png"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}
