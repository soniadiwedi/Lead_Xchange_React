import React from 'react'
import automobile from '../../assets/images/automobile.png';
import lifestyle from '../../assets/images/lifestyle.png';
import healthcare from '../../assets/images/healthcare.png';
import properties from '../../assets/images/properties.png';
import hospitality from '../../assets/images/hospitality-and-entertainment.png';
import electronics from '../../assets/images/electronics.png';


export const Launching  = () => {
  return (
   <>
      <section className="ultimate">
         <div className="container">
            <h3>Launching Soon</h3>
            <div className="row">
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={automobile}/>
                     <h5>Ultimate Premium Automobile Privileges</h5>
                     <p>LeadXchange has formed partnerships with renowned automobile companies to offer its members a cash back benefit of 1%.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={lifestyle}/>
                     <h5>Luxurious Lifestyle Privileges</h5>
                     <p>LeadXchange provides its members with an extensive selection of top fashion and entertainment brands</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={healthcare}/>
                     <h5>Ultimate Customized Healthcare Packages</h5>
                     <p>Save up to 15% on healthcare packages from India's top digital healthcare platform.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={properties}/>
                     <h5>Exquisite and Opulent Properties</h5>
                     <p>LeadXchange members can enjoy special discounts offered by well-known property partners.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={hospitality}/>
                     <h5>Ultimate Hospitality and Entertainment</h5>
                     <p>Discover incredible deals for your extravagant accommodation, complete with a plethora of entertainment options.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="ultimate-inner text-center">
                     <img src={electronics}/>
                     <h5>Unbeatable Electronics Discounts</h5>
                     <p>Discover exclusive offers and enjoy discounts ranging from 3-5% on a wide range of popular electronic brands.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </>
  )
}
