import React from 'react'
import intenden1 from "../../assets/images/intenden-icon.png"
import domain from "../../assets/images/domain-img.png";
import cxo from "../../assets/images/CXOs.png"
import { Link } from 'react-router-dom';
export const Vertual = () => {
  return (
    <>
      <section id="virtual" class="start">
         <div className="container">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xll-6" data-aos="flip-up">
                  <div className="start-left">
                     <h3> Virtual   <span className="yellow-title">CXOs</span> </h3>
                     <p>We facilitate brainstorming and solving your business  problem with Domain</p>
                     <div className="million-box d-flex">
                        <img src={cxo} className="img-fluid" alt="images/CXOs.png"/>
                        <div className="million-box-right">
                           <h5><span>1 Million+</span><br/> CEO , Founder , CMO , CFO, CBO , CIO, CTO, CISO , CDO ,CFO ,CHRO,CKO,CLO,CRDO,CSO & Other C'Level</h5>
                        </div>
                     </div>
                     <ul class="d-flex">
                        <li> <img src={intenden1} className="img-fluid" alt="images/intenden-icon.png"/>Attend Mentorship session </li>
                        <li> <img src={intenden1} className="img-fluid" alt="images/intenden-icon.png"/>Host Mentorship session</li>
                     </ul>
                     <Link className="btn-lead">Apply for Expert advice</Link>
                     <Link className="btn-lead">Register as Domain Expert</Link>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xll-6" data-aos="flip-down">
                  <div className="start-right">
                     <img src={domain} className="img-fluid" alt=""/>
                     <h5>Name Domain</h5>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  </div>
               </div>
            </div>
         </div>
      </section></>
  )
}
