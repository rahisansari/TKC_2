import Image from "next/image";
import Link from "next/link";
import Layout from "@/layout/layoutTemplate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MainPage({ data }) {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
    }
    ],
  }



    return (
        <>
            <Layout headData={data} >
            <section className="hero">
           <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-12 col-md-12">
              <h4 className="home-main-heading-1">
              The Kindness Campaign creates local leaders, involved community
                members, engaged businesses and at-promise young adults through
                leadership of impact initiatives.
              </h4>
            </div>
          </div>
        </div>



        <div className="icon-boxes position-relative ">
          <div className="container-fluid full_wrap hero">
            <div className="row gy-4">
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-delay={200}
                style={{ position: "relative" }}
              >
                <img
                  src="/bg-video-banner.jpg"
                  height="300px"
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className="video-wrap">

                  <video autoPlay loop width="100%" height={300} controls="true">
                    <source src="/demo-video.mp4" />
                  </video>



                </div>
              </div>
              {/* <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">

      <img src="./assets/img/pizza-maker.jpg" class="responsive">

    </div>

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">

      <img src="./assets/img/pizza-maker.jpg" class="responsive">

    </div> */}
            </div>
          </div>
        </div>


        <div className="container">
          <h4 className="home-main-heading-2">
            Our MISSION is to dismantle systemic, structural racism to achieve
            health equity, workforce equity, education equity and public equity.
          </h4>
        </div>
        <img src="/design-1.png" className="responsive" />
      </section>
      {/* End Hero Section */}


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





<section>
<div className="container-fluid full_wrap">
  <div className="row">
  <div className="col-sm-12 col-md-11 col-xs-12 col-lg-11">
  <Slider {...settings}>
      <div className="carousel-col">
                      <div className="block blue img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">500+</h2>
                          <p className="accessed_p">accessed provider <br/>services</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>

                   
                    <div className="carousel-col">
                      <div className="block red img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">40+</h2>
                          <p className="accessed_p">acquired WAGE<br/>EARNING skills</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>
                  

                    <div className="carousel-col">
                      <div className="block blue img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">15K</h2>
                          <p className="accessed_p">received public <br/>health information</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-col">
                      <div className="block red img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">30+</h2>
                          <p className="accessed_p">participated in <br/>school initiatives</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="carousel-col">
                      <div className="block blue img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">500+</h2>
                          <p className="accessed_p">accessed provider <br/>services</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>



                    <div className="carousel-col">
                      <div className="block red img-responsive">
                        <div className="container">
                          <div className="row">
                          <h2 className="counter_wrap_2">40+</h2>
                          <p className="accessed_p">acquired WAGE<br/>EARNING skills</p>
                          <p className="accessed_p2nd">2022 IMPACT</p> 
                          </div>
                        </div>
                      </div>
                    </div>
                   
   </Slider>
   </div>
</div>
</div>

<div className="container">
        <h2 className="text-center">
          {" "}
          <a href="#">
            <u className="decriptions_wrap">
              CLICK HERE for detail decriptions of our IMPACTS
            </u>
          </a>
        </h2>
      </div>

</section>





     
      <section className="MeetOURFounder">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <img
                src="/Meet-OUR-Founder.png"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
            </div>
            <div className="col-md-7 align-self-center">
              <h2 className="meetteam">Meet OUR Founder</h2>
              <p className="fst">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                iaculis feugiat bibendum. Suspendisse vel gravida quam. Nullam ac
                tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra
                at metus. Donec auctor a massa quis luctus. Etiam in lorem viverra,
                sagittis dui at, vulputate magna. Nunc egestas pellentesque lacus,
                vehicula sollicitudin elit porttitor sit amet. Aliquam erat
                volutpat. Aenean at dui dictum dolor.
                Nunc egestas pellentesque lacus,
                vehicula sollicitudin elit porttitor sit amet. Aliquam erat
                volutpat. Aenean at dui dictum dolor.
                Etiam in lorem viverra,
                sagittis dui at, vulputate magna. Nunc egestas pellentesque lacus,
                vehicula sollicitudin elit porttitor sit amet. Aliquam erat
                volutpat. Aenean at dui dictum dolor.
                <a href="#"> &nbsp; Read more...</a>
              </p>
              <p>&nbsp;</p>
              <h2>
                {" "}
                <a href="#">
                  <u className="decriptions_wrap">
                    CLICK HERE to meet The Kindness Compaign TEAM!
                  </u>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="news_title_one ">
        <div
          className="container aos-init aos-animate bottom-bdr"
          data-aos="fade-up"
        >
          <h3 className="text-center mb-5 mt-4 kindness_campaign">
            The Kindness Campaign News
          </h3>
          <div className="row">
            <div className="col-md-6 align-self-center">
              <img
                src="/news-title.png"
                className="responsive"
                alt=""
              />
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="News_title">News Title One</h2>
              <p className="fst">
                Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.

                Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit,
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.


              </p>
              <button type="button" className="readbtn">
                Read more
              </button>
              <div className="row mt-4">
                <div className="col-6">
                  <h3 className="align-self-center">
                    <a href="#">
                      <span className="share_wrap">
                        <i className="fa fa-comment" aria-hidden="true" />
                        &nbsp; 2
                      </span>
                    </a>
                  </h3>
                </div>
                <div className="col-6">
                  <h3 className="align-self-center">
                    <a href="#">
                      <span className="share_wrap"> Share </span>
                    </a>&nbsp;&nbsp;
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> &nbsp;</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recent-posts ">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/news-title-two.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">
                  <a href="#">News Title Two</a>
                </h2>
                <p className="post-category">
                  Lorem ipsum dolor sit amet, eder iut consectetuer edeir
                </p>
                <div className="row">
                  <div className="col-4">
                    <button type="button" className="btn btn-info shar_btn">
                      Read more
                    </button>
                  </div>
                  <div className="col-8 align-self-center icon_wrap">
                    {" "}
                    <span className="share"> Share </span>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> &nbsp;</a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/news-title-two.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">
                  <a href="#">News Title Two</a>
                </h2>
                <p className="post-category">
                  Lorem ipsum dolor sit amet, eder iut consectetuer edeir
                </p>
                <div className="row">
                  <div className="col-4">
                    <button type="button" className="btn btn-info shar_btn">
                      Read more
                    </button>
                  </div>
                  <div className="col-8 align-self-center icon_wrap">
                    {" "}
                    <span className="share"> Share </span>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> &nbsp;</a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/news-title-two.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h2 className="title">
                  <a href="#">News Title Two</a>
                </h2>
                <p className="post-category">
                  Lorem ipsum dolor sit amet, eder iut consectetuer edeir
                </p>
                <div className="row">
                  <div className="col-4">
                    <button type="button" className="btn btn-info shar_btn">
                      Read more
                    </button>
                  </div>
                  <div className="col-8 align-self-center icon_wrap">
                    {" "}
                    <span className="share"> Share </span>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /> &nbsp;</a>
                    <a href="#"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;</a>
                    <a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> &nbsp;</a>
                  </div>
                </div>
              </article>
            </div>
            {/* End post list item */}
          </div>
          {/* End recent posts list */}
        </div>
      </section>
      <section className="text-center p-5 mt-4">
        <div className="container p-3">
          <h1 className="getinbox">GET THE LATEST IN YOUR INBOX</h1>
          <h3 className="getinbox-2">
            Get exclusive updates on our work and how you can help.
          </h3>
          <form>

            <input type="text" name="text" className="your_inbox_wrap" />
            <button type="butto1" className="btn-1 btn-primary ">
              SIGN UP TODAY
            </button>
          </form>


        </div>
      </section>






      <section className="news_title_two">
        <div className="container">
          <h3 className="mb-4 get_involved_wrap">GET INVOLVED</h3>
          <div className="row">
            <div className="col-md-7 align-self-centers">
              <img
                src="/news-title-3.png"
                className="responsive"
                alt="" />
            </div>


            <div className="col-md-5">
              <div className="col-md-12">
                <img src="/news-title-1.png"
                  className="responsive" alt="" />
              </div>

              &nbsp;
              <div className="col-md-12">
                <img
                  src="/news-title-2.png"
                  className="responsive"
                  alt=""
                />



              </div>
            </div>
          </div>
        </div>
      </section>














      <section className="text-center p-5 mt-4">
        <div className="container p-4">
          <h1 className="getinbox-3">
            Check Out <b> Putting Chicago To Work</b>
          </h1>
          <p className="getinbox-4">
            Putting Chicago To Work is a weekly publication that contains a plethora
            of job opportunities, community resources &amp; vocational training
            opportunities.
          </p>
          <p className="Putting_Chicago">
            Want the latest issue of Putting Chicago To Work?{" "}
            <a href="#">Click here.</a>
          </p>
          <p className="Putting_Chicago">
            Want access to daily job postings on Facebook?{" "}
            <a href="#">Click here.</a>
          </p>
        </div>
      </section>


      <p className="Sponsors_Partners_Spotligh mt-5">
        Sponsors &amp; Partners Spotlight
      </p>
      <section className="Sponsors-and-Partner bg-secondary-1">
        <div className="container sponsors_wrap">
          <div className="row">
            <div className="col">
              <img src="/clients/client-1.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-2.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-3.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-4.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-5.png" className="img-fluid" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <img src="/clients/client-6.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-7.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-8.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-9.png" className="img-fluid" />
            </div>
            <div className="col">
              <img src="/clients/client-10.png" className="img-fluid" />
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5 support ">
          {" "}
          “Thank you for all your support. We appreciate you!”
        </h2>
      </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const data = { title: 'The Kindness Campaign', description: 'The Kindness Campaign' }
    return {
        props: { data, },
    };
}

export default MainPage;