import React from 'react'
import { Link } from 'react-router-dom'
import member1 from "../../assets/images/member-1.png"
import member2 from '../../assets/images/member-2.png';
import member3 from '../../assets/images/member-3.png';
import member4 from '../../assets/images/member-4.png';
import member5 from '../../assets/images/member-5.png';
import member6 from '../../assets/images/member-6.png';
import member7 from '../../assets/images/member-7.png';
import member8 from '../../assets/images/member-8.png';

export const Members = () => {
  return (
   <>
      <section className="lead-market">
         <div className="container">
            <h3>Connect with our Member </h3>
            <div className="row"  data-aos="zoom-in">
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member1} className="img-fluid" alt="images/member-1.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member2} className="img-fluid" alt="images/member-2.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member3} className="img-fluid" alt="images/member-3.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member4} className="img-fluid" alt="images/member-4.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member5} className="img-fluid" alt="images/member-5.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member6} className="img-fluid" alt="images/member-6.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member7} className="img-fluid" alt="images/member-7.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="lead-box">
                     <img src={member8} className="img-fluid" alt="images/member-8.png"/>
                     <h5>Saurabh Ganeriwala</h5>
                     <p>Designation, Company Name</p>
                     <ul>
                        <li><Link ><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link ><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <Link className="bgn-now" >View More Members</Link>
            </div>
         </div>
      </section>
   </>
  )
}
