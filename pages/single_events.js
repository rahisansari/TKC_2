import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
import Layout from '@/layout/layoutTemplate';
const Single_events = () => {
    const [value, onChange] = useState(new Date());
    return (  


       <Layout title={'single Event'} >
<section>

<div className="container">

    <div className="event_wrap_main ">
        <div className="row">
            <div className="col-md-12">
                <h1 className="about_the_campaign">
                    CALENDAR OF EVENTS
                </h1>
                <h4 className="About_heading-1">
                    Kindness Everyday
                </h4>
            </div>
        </div>
    </div>
</div>
</section>

<section className='pt-0'>
<div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="Event_sidebar_1">



                <div className='container'>
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback" />
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>

                <div className='container'>
                    <h3 className="event_categories_wrap">Event Categories</h3>

                    <ul className="event_categories_list">
                        <li>Fundraising</li>
                        <li>Awareness Campaigns</li>
                        <li>Education and Training </li>
                        <li>Community Service</li>
                        <li>Cultural Celebrations</li>
                    </ul>


                    <div className='container'>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                </div>

                <section>
                    <div className='container'>
                        <div className="about_video_1">
                            <video autoPlay width="100%" height="auto" controls="true">
                                <source src="/demo-video.mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <div className='container'>
                    <p className="fst">
                        ATTENTION: Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. At vero eos et accusamus qui.
                    </p>
                </div>

            </div>
        </div>
        {/* Sidebar End */}





        {/* Sidebar Start */}
        <div className="col-md-8">
            <div className="Event_sidebar_2">
                <Tabs>
                    <TabList>
                        <Tab>Today</Tab>
                        <Tab>This Week </Tab>
                        <Tab>This Month</Tab>
                        <p className='upcoming_events_wrap'>All Upcoming Events <i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
                    </TabList>

                    <TabPanel>
                        <div className='container'>
                            <div className='row'>
                                <p className="fst_single_event_date"> June 22, 2023</p>
                                <p className="fst_Single_event"> 75th St Fresh Foods Market</p>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <Image
                                        src="/today_event_img.png"
                                        width={200}
                                        height={250}
                                        alt="Picture of the author"
                                    />
                                    <p className="fst_event"><b>TIME:</b><br />3:00pm - 5:00pm</p>
                                    <p className="fst_event"><b>LOCATION:</b><br />703 E 75th St <br />Chicago, IL 60619</p>
                                    <p className="fst_event"><b>EVENT TYPE:</b><br />Community Service</p>

                                    <div class="col-8 align-self-center icon_wrap">
                                        <p className="fst_event"><b>SHARE:</b></p>
                                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;</a>
                                        <a href="#"> <i class="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;</a>
                                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> &nbsp;</a>
                                        <a href="#"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> &nbsp;</a>
                                        <a href="#"> <i class="fa fa-instagram" aria-hidden="true"></i> &nbsp;</a>
                                        
                                       
                                        </div>


                                        <div className='container mt-5'>
                                        <div className='row'>
                                        <p className="download_event"><a href='#'>Download event (ICAL)</a> </p>
                                        <p className="download_event"><a href='#'>Download event (Google)</a></p>
                                        
                                        </div>
                                        </div>
                                       </div>


                                


                                <div className='col-md-8'>
                                    <p className="fst_event">Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  </p>


                                    <p className="fst_event">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

                                    <section className="map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8958144764715!2d80.99052167428827!3d26.843265863073736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3ec914fc37b%3A0xda24df84e2ce4216!2sNextupgrad%20Web%20Solutions%20Private%20Limited%20%7C%20Web%20%7C%20Mobile%20App%20%7C%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1688475352629!5m2!1sen!2sin"
                                            width={'100%'}
                                            height={250}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />

                                    </section>

                                    <p className="fst_event">NOTICE: Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <h2>Content 2</h2>
                    </TabPanel>


                    <TabPanel>
                        <h2>Content 3</h2>
                    </TabPanel>


                </Tabs>
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
                            <img src="/about-2.jpg" className="responsive" />
                        </div>
                    </div>


                    <div className="item">
                        <div className="carousel-col">
                            <img src="/about-2.jpg" className="responsive" />
                        </div>
                    </div>

                    <div className="item">
                        <div className="carousel-col">
                            <img src="/about-2.jpg" className="responsive" />
                        </div>
                    </div>


                    <div className="item">
                        <div className="carousel-col">
                            <img src="/about-2.jpg" className="responsive" />
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
 
export default Single_events;