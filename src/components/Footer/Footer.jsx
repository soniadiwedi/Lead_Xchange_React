import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-ft.png';

function Footer() {
  return (
    <>
       <section className="footer-top">
         <div className="container" data-aos="fade-down">
            <div className="row">
               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xll-4">
                  <div className="footer-top-1">
                     <Link to=''><img src={logo}/></Link>
                     <p>Subscribe to keep up with the latest news</p>
                     <div className="input-group mb-4"> <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2"/> 
                     <span className="input-group-text" id="basic-addon2"><i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                     </div>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3">
                  <div className="footer-top-2">
                     <h4>Learn</h4>
                     <ul>
                        <li><Link to=''>Our Product</Link></li>
                        <li><Link to=''>Tutorials</Link></li>
                        <li><Link to=''>Our Service</Link></li>
                        <li><Link to=''>Best Features</Link></li>
                        <li><Link to=''>About</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xll-2">
                  <div className="footer-top-2">
                     <h4>Company</h4>
                     <ul>
                        <li><Link to=''></Link></li>
                        <li><Link to=''>Careers</Link></li>
                        <li><Link to=''>Contact us</Link></li>
                        <li><Link to=''>News & Blog</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xll-3 subrcb ">
                  <div className="footer-top-2">
                     <h4>Follow Us</h4>
                     <ul  className="d-flex socila-icon">
                        <li><Link to=''><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to=''><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to=''><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div>
               </div>
               <div className="copy-box d-flex">
                  <div className="copy-content invisible">
                     <p>@2023 Lead Exchange. All rights reserved.</p>
                  </div>
                  <div className="copy-content">
                     <p style={{textAlign: 'end'}}>@2023 Techplus Media PTE Ltd. All rights reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}

export default Footer;
