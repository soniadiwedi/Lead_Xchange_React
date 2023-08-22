import React from "react";
import list1 from "../../assets/images/blog-list-1.png";
import list2 from "../../assets/images/blog-list-2.png";
import recent1 from "../../assets/images/recent-1.png";
import recent2 from "../../assets/images/recent-2.png";
import recent3 from "../../assets/images/recent-3.png";
import recent4 from "../../assets/images/recent-4.png";

const Latest = () => {
  return (
    <>
      <section className="universities latest">
        <div className="container">
          <div className="row">
            <div className="col-md-9 pe-4">
              <div
                className="universities-left aos-init aos-animate"
                data-aos="fade-down"
              >
                <img src={list1} />
                <div className="whatp aos-init" data-aos="fade-right">
                  <h3>What does an Interior Designer do?</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 ps-3">
              <div className="universities-right universities-right-blg">
                <div className="recent-blog" data-aos="zoom-in-left">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="recent-blog-left">
                        <img src={recent1} />
                      </div>
                      <div className="recent-blog-left">
                        <img src={recent2} />
                      </div>
                      <div className="recent-blog-left">
                        <img src={recent3} />
                      </div>
                      <div className="recent-blog-left">
                        <img src={recent4} />
                      </div>
                      <div className="recent-blog-left">
                        <img src={recent4} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="recent-blog-right">
                        <h5>SEPTEMBER 6, 2021</h5>
                        <h4>How to Become an Interior Designer?</h4>
                      </div>
                      <div className="recent-blog-right">
                        <h5 className="sept">SEPTEMBER 6, 2021</h5>
                        <h4>How to Become an Interior Designer?</h4>
                      </div>
                      <div className="recent-blog-right">
                        <h5 className="sept">SEPTEMBER 6, 2021</h5>
                        <h4>How to Become an Interior Designer?</h4>
                      </div>
                      <div className="recent-blog-right">
                        <h5 className="sept">SEPTEMBER 6, 2021</h5>
                        <h4>How to Become an Interior Designer?</h4>
                      </div>
                      <div className="recent-blog-right">
                        <h5 className="sept">SEPTEMBER 6, 2021</h5>
                        <h4>How to Become an Interior Designer?</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fireside">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>LEAD PRIORITIES 2023</h3>
              <div className="fireside-main d-flex">
                <img src={list1} />
                <div className="fireside-main-rigth">
                  <h4>
                    The importance of digital transformation continues to be one
                    of the most important priorities
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here'
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>LEAD PRIORITIES 2023</h3>
              <div className="fireside-main d-flex">
                <img src={list1} />
                <div className="fireside-main-rigth">
                  <h4>
                    The importance of digital transformation continues to be one
                    of the most important priorities
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here'
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="universities latest ">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="latest-title">
                <h3>LeadXchange Thursday</h3>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-12 ">
                  <div
                    class="latest-article aos-init aos-animate"
                    data-aos="zoom-in-down"
                  >
                    <img src={list1} />
                    <h3>The Must-Know Digital</h3>
                    <p>
                      The importance of digital transformation continues to be
                      one of the most important priorities in organizations,
                      especially so after the
                    </p>
                    <div class="reads-latest">
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div
                    class="latest-article aos-init aos-animate"
                    data-aos="zoom-in-down"
                  >
                    <img src={list2} />
                    <h3>The Must-Know Digital</h3>
                    <p>
                      The importance of digital transformation continues to be
                      one of the most important priorities in organizations,
                      especially so after the
                    </p>
                    <div class="reads-latest">
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="latest-article aos-init" data-aos="zoom-in-down">
                    <img src={list2} />
                    <h3>The Must-Know Digital</h3>
                    <p>
                      The importance of digital transformation continues to be
                      one of the most important priorities in organizations,
                      especially so after the
                    </p>
                    <div class="reads-latest">
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
