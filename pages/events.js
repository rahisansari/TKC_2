import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';
import Layout from '@/layout/layoutTemplate';

const Events = () => {
    const [value, onChange] = useState(new Date());
    return (
      
        <Layout title='Events'>
       
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

                                    <div className='calender'> 
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
                                                <div className='col-md-4'>
                                                    <Image
                                                        src="/today_event_img.png"
                                                        width={200}
                                                        height={250}
                                                        alt="Picture of the author"
                                                    />
                                                </div>

                                                <div className='col-md-8'>
                                                    <p className="fst_event">TODAY <span><i className="fa fa-download" aria-hidden="true"></i></span></p>
                                                    <p className="fst_event">3:00pm - 5:30pm</p>
                                                    <p className="fst_event color_heading">75th St Fresh Foods Market</p>
                                                    <p className="fst_event"><b>Location:</b> 703 E 75th St, Chicago, IL</p>
                                                    <p className="fst_event"><b>Event Type:</b> Community Service</p>
                                                    <p className="fst_event"><b>Cost:</b> FREE <span><i className="fa fa-plus-square-o" aria-hidden="true"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                        <h2>Any content 2</h2>
                                    </TabPanel>


                                    <TabPanel>
                                        <h2>Any content 3</h2>
                                    </TabPanel>


                                </Tabs>
                            </div>


                            <div className='container'>
                                <div className="Event_sidebar_2">
                                    <div className='on_going_events mb-4'>
                                        <p>On Going  Events</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <Image
                                                src="/today_event-2_img.png"
                                                width={200}
                                                height={250}
                                                alt="Picture of the author"
                                            />
                                        </div>

                                        <div className='col-md-8'>
                                            <p className="fst_event">THURSDAYS <span><i className="fa fa-download" aria-hidden="true"></i></span></p>
                                            <p className="fst_event">3:00pm - 5:30pm</p>
                                            <p className="fst_event color_heading">75th St Fresh Foods Market</p>
                                            <p className="fst_event"><b>Location:</b> 703 E 75th St, Chicago, IL</p>
                                            <p className="fst_event"><b>Event Type:</b> Community Service</p>
                                            <p className="fst_event"><b>Cost:</b> FREE <span><i className="fa fa-plus-square-o" aria-hidden="true"></i></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className='container'>
                                <div className="Event_sidebar_2">
                                    <div className='on_going_events mt-5 mb-4'>
                                        <p>Upcoming  Events</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <Image
                                                src="/today_event-2_img.png"
                                                width={200}
                                                height={250}
                                                alt="Picture of the author"
                                            />
                                        </div>

                                        <div className='col-md-8'>
                                            <p className="fst_event">JUNE 24, 2023 <span><i className="fa fa-download" aria-hidden="true"></i></span></p>
                                            <p className="fst_event">9:00am - 12:15pm</p>
                                            <p className="fst_event color_heading">Educational Seminar For All</p>
                                            <p className="fst_event"><b>Location: </b> 123 Main St, Chicago, IL</p>
                                            <p className="fst_event"><b>Event Type: </b> Education and Training</p>
                                            <p className="fst_event"><b>Cost:</b> FREE <span> <i className="fa fa-plus-square-o" aria-hidden="true"></i></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className='container'>
<div className="Event_sidebar_2">
<div className='row'>  
<div className='col-md-4'>
<Image
src="/today_event-2_img.png"
width={200}
height={250}
alt="Picture of the author"
/>
</div>

<div className='col-md-8'>  
<p className="fst_event">JULY 2, 2023 <span><i className="fa fa-download" aria-hidden="true"></i></span></p>
<p className="fst_event">9:00am - 10:00pm</p>
<p className="fst_event color_heading">Youth Morning Event</p>
<p className="fst_event"><b>Location:</b> 123 Main St, Chicago, IL</p>
<p className="fst_event"><b>Event Type:</b> Awareness Campaigns</p>
<p className="fst_event"><b>Cost:</b> FREE <span><i className="fa fa-plus-square-o" aria-hidden="true"></i></span></p>
</div>
</div>
</div>
</div> */}



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

export default Events;