import React from 'react'
import { Link } from 'react-router-dom'
import whybg from "../../assets/images/why-bg.png"
import seniorprofessional from "../../assets/images/senior-professional.png"
import connections from "../../assets/images/Connections-established.png"
export const Connection = () => {
  return (
   <>
     <section className="need">
         <div className="container " data-aos="zoom-in-left">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xll-6">
                  <div className="need-inner">
                     <img src={whybg} class="img-fluid" alt="images/why-bg.png"/>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xll-6">
                  <div className="need-inner-right">
                     <h3>Why Make Connections through LeadXchange?</h3>
                     <div className="target-box">
                        <ul className="d-flex">
                           <li>
                              <img src={seniorprofessional} className="img-fluid" alt="images/senior-professional.png"/>
                              <h6><span>1Million</span><br/>Senior Professional</h6>
                           </li>
                           <li>
                              <img src={connections} className="img-fluid" alt="images/Connections-established.png"/>
                              <h6><span>1.5+ Million  </span><br/>Connections made </h6>
                           </li>
                        </ul>
                     </div>
                     
					 <p>We ensure that you only receive relevant and valuable introductions. 
No more inbox clutter or unwanted messages - we respect your consent. 
Experience personalized 1:1 introductions that truly matter. 
</p>
                     <Link className="btn-lead" href="#">Start Free</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
  )
}
