import Layout from "@/layout/layoutTemplate";

const Events = () => {
    return ( 

<Layout>

<section id="contact" className="contact_us_wrap hero">
                <div className="container">

                    <div className="row">
                        <div className="col-md-5 align-self-center wow fadeInUp over_contact_wrap">

                            <div className="row">
                                <div className="col-md-6 contact_add">
                                    <i className="fa fa-map-marker contact_wrap" aria-hidden="true"></i>
                                    <h4> OUR MAIN OFFICE   </h4>
                                    <p>703 E 75th St </p>
                                    <p>Chicago, IL 60619 </p>
                                </div>

                                <div className="col-md-6 contact_add">

                                    <i className="fa fa-volume-control-phone contact_wrap" aria-hidden="true"></i>
                                    <h4>   PHONE NUMBER   </h4>
                                    <p> 773.222.2222 </p>

                                </div>



                                <div className="col-md-6 contact_add">

                                    <i className="fa fa-envelope-o contact_wrap" aria-hidden="true"></i>
                                    <h4> EMAIL </h4>
                                    <p>info@kindnesseveryday.org</p>
                                </div>



                                <div className="col-md-6 contact_add">

                                    <i className="fa fa-globe contact_wrap" aria-hidden="true"></i>
                                    <h4> SOCIAL NETWORKS </h4>


                                    <ul>
                                        <li>Facebook</li>
                                        <li>LinkedIn</li>
                                    </ul>

                                    <ul>
                                        <li>Instagram</li>
                                        <li>YouTube</li>
                                    </ul>



                                </div>
                            </div>

                        </div>



                        <div className="col-md-7 from_wrap">
                            <div className="from_wrap_1">
                                <h2 className="input_wrap_1">CONTACT</h2>


                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                id="fname"
                                                name="firstname"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                type="text"
                                                id="lname"
                                                name="lastname"
                                                placeholder="Enter a valid email address"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 av">
                                            <label htmlFor="subject">Message:</label>
                                        </div>
                                        <div className="col-75">
                                            <textarea
                                                id="subject"
                                                name="subject"
                                                style={{ width: "100%", height: 110 }}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>

                                    <button type="button" className="Contact_form_btn">Send</button>


                                </form>






                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map_padding">


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8958144764715!2d80.99052167428827!3d26.843265863073736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3ec914fc37b%3A0xda24df84e2ce4216!2sNextupgrad%20Web%20Solutions%20Private%20Limited%20%7C%20Web%20%7C%20Mobile%20App%20%7C%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1688475352629!5m2!1sen!2sin"
                    width={'100%'}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </section>

              
  <section className="vission">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="row gy-12">
        <div className="col-lg-12">
          <h4 className="home-main-heading-3">
            We have a VISSION of a strong, thriving community without
            institutional barriers that stands in the way of equitable
            participation.
          </h4>
          <div className="text-center">
            <a href="#" className="buy-btn supportbtn">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="counter counter_abc">
    <div className="container-fluid counter_8">
      <div className="row">
        <div className="col-xs-12 col-md-12 full_wrap">
          <div
            id="carousel"
            className="carousel slide"
            data-ride="carousel"
            data-type="1"
            data-interval={2500}
          >
            <div className="carousel-inner">
              <div className="item active">
                <div className="carousel-col">
                  <img src="/about-2.jpg" className="responsive"/>
                </div>
              </div>


              <div className="item">
                <div className="carousel-col">
                  <img src="/about-2.jpg" className="responsive"/> 
                </div>
              </div>

              <div className="item">
                <div className="carousel-col">
                  <img src="/about-2.jpg" className="responsive"/>
                </div>
              </div>


              <div className="item">
                <div className="carousel-col">
                  <img src="/about-2.jpg" className="responsive"/>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="controls-wrap">
      <div className="left carousel-control">
        <a href="#carousel" role="button" data-slide="prev">
          <div className="left-btn">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
          <span className="sr-only">Previous</span>
        </a>
      </div>
      <div className="right carousel-control">
        <a href="#carousel" role="button" data-slide="next">
          <div className="right-btn">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </div>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>

</Layout>

     );
}
 
export default Events;