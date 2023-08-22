import React from "react";
import Slider from "react-slick";
import maine from "../../assets/images/maine-bannerss-1.jpg";
import active from "../../assets/images/activeimg.png";
import lead from "../../assets/images/total-leads.png";
import contact from "../../assets/images/Contact-level-intent-data.png";
import advance from "../../assets/images/Advance-Intent-Data.png";
import profile from "../../assets/images/jop-profile.png";
import mentor from "../../assets/images/Mentor.png";
import connection from "../../assets/images/Connections-established.png";
import startup from "../../assets/images/startup.png";
import investor from "../../assets/images/Investors.png";
import blue from "../../assets/images/blue-icon-1.png";
import Satisfied from "../../assets/images/Satisfied-Professionals.png";
import { Link } from "react-router-dom";

export const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section id="lead" className="our-leads">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xll-12 ps-0 pe-0">
              <div className="our-leads-inner">
                <img
                  src={maine}
                  className="img-fluid"
                  alt="images/maine-bannerss-1.jpg"
                />
                <div className="our-leads-caption" data-aos="fade-right">
                  {/* <!-- Swiper --> */}
                  <div className="total-tb">
                    <div thumbsSlider="" className="swiper mySwiper">
                      <div className="swiper-wrapper">
                        <Slider {...settings}>
                          <div className="swiper-slide">
                            <h6>Active Leads</h6>
                          </div>
                          <div className="swiper-slide">
                            <h6>Intent Data </h6>
                          </div>
                          <div className="swiper-slide">
                            <h6>Virtual CXOs</h6>
                          </div>
                          <div className="swiper-slide">
                            <h6>Investment</h6>
                          </div>
                          <div className="swiper-slide">
                            <h6>Jobs</h6>
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div
                      style={{
                        swiperNavigationColor: "#fff",
                        swiperPaginationColor: "#fff",
                      }}
                      className="swiper mySwiper2"
                    >
                      <div className="swiper-wrapper">
                        <Slider {...settings}>
                          <div className="swiper-slide">
                            <div className="active-main d-flex">
                              <div className="active-main-left">
                                <img
                                  src={active}
                                  className="img-fluid"
                                  alt="images/activeimg.png"
                                />
                              </div>
                              <div className="active-main-right">
                                <h4>Active Leads</h4>
                                <p>
                                  Supercharge your lead generation with our
                                  cutting-edge platform that not only connects
                                  you with an abundance of high-quality leads
                                  but also actively amplifies your network.
                                </p>
                                <div className="target-box">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={lead}
                                        className="img-fluid"
                                        alt="images/total-leads.png"
                                      />
                                      <h6>
                                        <span>239180100+ </span>
                                        <br />
                                        Total Leads serviced{" "}
                                      </h6>
                                    </li>
                                    <li>
                                      <img
                                        src={Satisfied}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <h6>
                                        <span>78000+ </span>
                                        <br />
                                        Satisfied Professionals{" "}
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                                <div className="comanies-main d-flex">
                                  <div className="comanies-main-right">
                                    <a className="btn-lead">Start for free</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="active-main d-flex">
                              <div className="active-main-left">
                                <img
                                  src={active}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="active-main-right">
                                <h4>Intent Data </h4>
                                <p>
                                  Maximize your chances of reaching your ideal
                                  business prospects at the perfect moment -
                                  when they are most likely to make a purchase
                                  that aligns with your service or product
                                  category.
                                </p>
                                <div className="target-box">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={contact}
                                        className="img-fluid"
                                        alt="images/Contact-level-intent-data.png"
                                      />
                                      <h6>
                                        <span>1509889 </span>
                                        <br />
                                        Contact-level intent data delivers{" "}
                                      </h6>
                                    </li>
                                    <li>
                                      <img
                                        src={advance}
                                        className="img-fluid"
                                        alt="images/Advance-Intent-Data.png"
                                      />
                                      <h6>
                                        <span>195000+ </span>
                                        <br />
                                        Advance Intent Data delivered{" "}
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                                <div className="comanies-main d-flex">
                                  <div className="comanies-main-right">
                                    <a className="btn-lead">Start for free</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="active-main d-flex">
                              <div className="active-main-left">
                                <div className="profile-jobs">
                                  <img
                                    src={profile}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <h5>Founder & CEO </h5>
                                  <h6>Company Name</h6>
                                </div>
                              </div>
                              <div className="active-main-right">
                                <h4>Virtual CXOs </h4>
                                <p>
                                  We Connect you with the World's Best Experts .
                                  Our team of CXOs are highly skilled in their
                                  respective business functions and can provide
                                  invaluable support in a variety of areas. Here
                                  are just some of the key areas where they
                                  excel, but their expertise is not limited to:
                                </p>
                                <ul className="mrkts">
                                  <li>Marketing Strategy </li>
                                  <li>Growth Hacking</li>
                                  <li>Finance & Commercial </li>
                                  <li>HR Management </li>
                                  <li>Technology & IT </li>
                                  <li>Digital Transformation </li>
                                  <li>General Management & Operations </li>
                                  <li>C-Suite Influencer Marketing</li>
                                  <li>B2B & Enterprise Strategies</li>
                                  <li>Investor Relations</li>
                                  <li>Product Management </li>
                                </ul>
                                <div className="target-box">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={mentor}
                                        className="img-fluid"
                                        alt="images/Mentor.png"
                                      />
                                      <h6>
                                        <span>15000+ </span>
                                        <br />
                                        Mentor & Mentees{" "}
                                      </h6>
                                    </li>
                                    <li>
                                      <img
                                        src={connection}
                                        className="img-fluid"
                                        alt="images/Connections-established.png"
                                      />
                                      <h6>
                                        <span>195000+ </span>
                                        <br />
                                        Connections established{" "}
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                                <div className="comanies-main d-flex">
                                  <div className="comanies-main-right">
                                    <Link className="btn-lead">
                                      Apply for Virtual CXOs{" "}
                                    </Link>
                                    <Link className="btn-lead">
                                      Become a Mentor CXO{" "}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="active-main d-flex">
                              <div className="active-main-left">
                                <div className="profile-jobs">
                                  <img
                                    src={profile}
                                    className="img-fluid"
                                    alt="images/jop-profile.png"
                                  />
                                  <h5>Founder & CEO </h5>
                                  <h6>Company Name</h6>
                                </div>
                              </div>
                              <div className="active-main-right">
                                <h4>Investment</h4>
                                <p>
                                  We facilitate the connection between founders
                                  and investors, fostering strong and
                                  trustworthy relationships.
                                </p>
                                <div className="target-box">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={startup}
                                        className="img-fluid"
                                        alt="images/startup.png"
                                      />
                                      <h6>
                                        <span>40000+ </span>
                                        <br />
                                        Startup registered{" "}
                                      </h6>
                                    </li>
                                    <li>
                                      <img
                                        src={investor}
                                        className="img-fluid"
                                        alt="images/Investors.png"
                                      />
                                      <h6>
                                        <span>19500+ </span>
                                        <br />
                                        Investors on Platform{" "}
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                                <div className="comanies-main d-flex">
                                  <div className="comanies-main-right">
                                    <Link className="btn-lead">
                                      Apply for Investment
                                    </Link>
                                    <Link className="btn-lead">
                                      Become an Investor
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="active-main d-flex">
                              <div className="active-main-left">
                                <div className="profile-jobs">
                                  <img
                                    src={profile}
                                    className="img-fluid"
                                    alt="images/jop-profile.png"
                                  />
                                  <h5>Founder & CEO </h5>
                                  <h6>Company Name</h6>
                                </div>
                              </div>
                              <div className="active-main-right">
                                <h4>Jobs</h4>
                                <p>
                                  We provide top-tier career opportunities for
                                  C-suite professionals .
                                </p>
                                <div className="target-box">
                                  <ul className="d-flex">
                                    <li>
                                      <img
                                        src={blue}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <h6>
                                        <span>1million+ </span>
                                        <br />
                                        Professionals{" "}
                                      </h6>
                                    </li>
                                    <li>
                                      <img
                                        src={blue}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <h6>
                                        <span>500+ </span>
                                        <br />
                                        CXO’s placed{" "}
                                      </h6>
                                    </li>
                                  </ul>
                                </div>
                                <div className="comanies-main d-flex">
                                  <div className="comanies-main-right">
                                    <a className="btn-lead">Apply for Job </a>
                                    <a className="btn-lead">Post a Job </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
