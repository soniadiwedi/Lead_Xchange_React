import React from 'react'

export const Faq = () => {
  return (
  <>
      <section className="faqs">
         <div className="container">
            <h3>FAQ</h3>
            <div className="row">
               <div className="col-md-12">
                  <div className="accordion" id="myAccordion">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                           <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">How LeadXchange  is different from other Networking platform ?</button>									
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                           <div className="card-body">
                              <p>Are you tired of networking platforms that fail to deliver real value? Look no further! LeadXchange is here to revolutionize the way professionals connect and collaborate. Here's how we stand out from the competition:<br/>
                                 1. Quality Over Quantity: Our advanced algorithm matches you with like-minded professionals who share your interests, goals, and expertise. Say goodbye to endless scrolling and hello to meaningful networking.<br/>
                                 2. Exclusive Community: At LeadXchange, we believe in the power of exclusivity. We carefully curate our community to ensure that only the most dedicated and accomplished professionals join our ranks. By joining LeadXchange, you gain access to an exclusive network of industry leaders, thought influencers, and game-changers<br/>
                                 3. AI-Powered Recommendations: Our cutting-edge AI technology takes networking to a whole new level. LeadXchange's intelligent recommendation engine suggests relevant connections, events, and opportunities tailored to your unique professional profile. Say goodbye to endless searching and let LeadXchange do the work for you.<br/>
                                 4. Seamless Collaboration: LeadXchange goes beyond mere networking. Our platform offers a range of collaboration tools that simplify connecting Domain expert , project management, task delegation, and knowledge sharing. Whether you're working on a team project or seeking expert advice, LeadXchange provides the tools you need to succeed.<br/>
                                 5. Personalized Development: We believe that networking should be a catalyst for personal and professional growth. LeadXchange offers personalized development resources, including webinars, workshops, and mentorship programs. Enhance your skills, expand your knowledge, and unlock your full potential with LeadXchange.<br/>
                                 5. Personalized Development: We believe that networking should be a catalyst for personal and professional growth. LeadXchange offers personalized development resources, including webinars, workshops, and mentorship programs. Enhance your skills, expand your knowledge, and unlock your full potential with LeadXchange.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                           <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Is there any Membership Fee for Joining ? </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                           <div className="card-body">
                              <p>LeadXchange is currently available to members for free. Enjoy using LeadXchange without any charges.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                           <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">What if a particular expert does not deliver as per expectation ? </button>                     
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                           <div className="card-body">
                              <p>We strive to assist both parties in understanding the scope of work in detail and establishing realistic expectations. While such cases are rare, our goal is to avoid any potential issues.</p>
                           </div>
                        </div>
                     </div>
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                           <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">Can I connect with professionals outside my industry on Leadxchange Platform?</button>                     
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                           <div className="card-body">
                              <p>Yes, Leadxchange Platform allows professionals to connect with individuals from various industries. This cross-industry networking feature aims to promote collaboration, knowledge sharing, and serendipitous connections across sectors</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

  </>
  )
}
