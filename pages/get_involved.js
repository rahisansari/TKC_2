import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

const Get_involved = () => {
    return ( 
<>
<section>

<div className="container">

  <div className="event_wrap_main ">
    <div className="row">
      <div className="col-md-12">
        <h1 className="about_the_campaign">
          GET INVOLVED
        </h1>

        <ul className="d-flex_wrap">
          <li>Donate</li>
          <li><i className="fa fa-square square_wrap" aria-hidden="true"></i>Volunteer</li>
          <li><i className="fa fa-square square_wrap" aria-hidden="true"></i>Partner</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

<section className='pt-0'>

<div className="container">
  <div className="row">
    <div className="col-md-4">
      <div className="get_involved_sidebar_1">






        <div className='container'>
         


<form className='donation_form'>
<h3 className="event_categories_wrap text-center" style={{ fontSize: "15pt" }}>Support Our Cause</h3>
<h3 className="event_categories_wrap text-center" style={{ marginTop: "-5px", marginBottom: 20 }}> LEAVE A DONATION</h3>

<div className="mb-3">
<textarea className="form-control donation_form_text" id="Textarea1" placeholder="What Inspired You To Give? *" rows="3"></textarea>
</div>

<div className='container'>
<div className='row'>
<label for="exampleFormControlInput1" className="form-label donation_form_text">Select Gift Amount: *</label>
<div className='col-md-6'>

<div className="form-check">
<input
className="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault1"
/>
<label className="form-check-label label_radio" htmlFor="flexRadioDefault1">
$1,000
</label>
</div>


<div className="form-check">
<input
className="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault2"
defaultChecked=""
/>
<label className="form-check-label label_radio" htmlFor="flexRadioDefault2">
$250
</label>
</div>
</div>




<div className='col-md-6'>
<div className="form-check">
<input
className="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault3"
/>
<label className="form-check-label label_radio" htmlFor="flexRadioDefault3">
$ 500
</label>
</div>


<div className="form-check">
<input
className="form-check-input"
type="radio"
name="flexRadioDefault"
id="flexRadioDefault4"
defaultChecked=""
/>
<label className="form-check-label label_radio" htmlFor="flexRadioDefault4">
$100
</label>
</div>
</div>
</div>
</div>


<div className="mb-3">
<input type="text" className="donation_form_text" id="formGroupExampleInput" placeholder="Custom Gift Amount:"/>
</div>
<input type="text" className="donation_form_text" placeholder="Name" aria-label="Name *"/>

<input type="email" className="donation_form_text" id="inputEmail"placeholder="Email *"/>

<input type="phone" className="donation_form_text" id="inputnumber"placeholder="Phone:"/>

<textarea className="form-control donation_form_text" id="Textarea2" placeholder="Address: *" rows="3"></textarea>

<textarea className="form-control donation_form_text" id="Textarea3" placeholder="Gift Note:" rows="3"></textarea>
<div className="text-center">
<button type="submit" className="btn btn-primary donate_btn">Donate</button>
</div>
</form>


        </div>

<div className='container text-center mt-5'>
<Image
src="/Zelle_logo.jpg"
width={70}
height={35}
alt="Picture of the author"
/>
<p className="fst_wrap text-center">
The Kindness Campaign can receive money by Zelle using <br/>
the email <a href="mailto:chris@kindnesseveryday.org">chris@kindnesseveryday.org</a>
</p>


<Image
src="/bar_code_logo.png"
width={250}
height={230}
alt="Picture of the author"
/>

<p className="fst_wrap text-center">The Kindness Campaign can receive money by CashApp using $thekindnesscampaign</p>

<p className="fst_wrap text-center">If you prefer to send a check, please make the check out to The Kindness Campaign
and send to:</p>


<p className="fst_wrap text-center"><b>The Kindness Campaign <br/>703 E 75th St<br/>
Chicago, IL 60619 - 1907</b></p>

</div>


<form className='donation_form'>
<h3 className="event_categories_wrap text-center">LEARN MORE</h3>
<h3 className="event_categories_wrap text-center">Inquire about Volunteering and/or Partnering with us.</h3>









<input type="text" className="donation_form_text" placeholder="Name" aria-label="Name *"/>

<input type="email" className="donation_form_text" id="inputEmail"placeholder="Email *"/>

<input type="phone" className="donation_form_text" id="inputnumber"placeholder="Phone:"/>

<label for="exampleFormControlInput1" className="form-label donation_form_text">Interest: *</label>
<ul>
<div className="form-check">
<input className="form-check-input label_radio" type="checkbox" value="" id="flexCheckDefault_1"/>
<label className="form-check-label label_radio" for="flexCheckDefault_1">
Volunteering
</label>
</div>

<div className="form-check">
<input className="form-check-input label_radio" type="checkbox" value="" id="flexCheckDefault_2"/>
<label className="form-check-label label_radio" for="flexCheckDefault_2">
Partnering
</label>
</div>

<div className="form-check">
<input className="form-check-input label_radio" type="checkbox" value="" id="flexCheckDefault_3"/>
<label className="form-check-label label_radio" for="flexCheckDefault_3">
Other
</label>
</div>
</ul>



<textarea className="form-control donation_form_text" id="Textarea6" placeholder="Message:" rows="3"></textarea>



<div className="text-center">
<button type="submit" className="btn btn-primary donate_btn">SEND</button>
</div>
</form>

</div>
</div>








    {/* Sidebar End */}
















    {/* Sidebar Start */}
    <div className="col-md-8">
      <div className='container'>
        <div className="Event_sidebar">
          <div className='on_going_events mb-0'>
            <p>DONATE</p>
          </div>

          <div className="container">
            <div className='row'>
              <p className="fst_event_involved_sidebar">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis feugiat bibendum. Suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus. Etiam in lorem viverra, sagittis dui at, vulputate magna. Nunc egestas pellentesque lacus, vehicula sollicitudin elit porttitor sit amet. Aliquam erat volutpat. Aenean at dui dictum dolor.

              </p>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className="about_video_2">
                <video autoPlay width="100%" height="auto" controls="true">
                  <source src="/demo-video.mp4" />
                </video>
              </div>
            </div>
          </div>


          <div className='container'>
            <div className='row'>
              <div className="mt-5 text-center">
                <h4 className='get_involved_heading'>WISH LISTS</h4>
              </div>
            </div>
          </div>



          <div className='container'>
            <div className='row'>

              <p className='get_involved_p text-center'>
                Your donation allows us to devote more money to our programs by reducing expenses.
              </p>

              <p className='get_involved_p text-center'>
                For students, donec iaculis feugiat bibendum. Suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus.
              </p>

              <p className='get_involved_p text-center'>
                For the homeless, suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus.
              </p>

              <div className="text-center"><a href="#" className="buy-btn involved_btn">Students (PFD)</a></div>

              <p className='get_involved_p text-center mt-5'>
                For the homeless, suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus.
              </p>

              <div className="text-center"><a href="#" className="buy-btn involved_btn">Homeless (PFD)</a></div>

            </div>
          </div>







          <div className='container'>
            <div className="Event_sidebar_3">
              <div className='voluntee_p'>
                <p>VOLUNTEER</p>
              </div>

              <div className="container">
                <div className='row'>
                  <p className="fst_event_involved_sidebar">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis feugiat bibendum. Suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus. Etiam in lorem viverra, sagittis dui at, vulputate magna. Nunc egestas pellentesque lacus, vehicula sollicitudin elit porttitor sit amet. Aliquam erat volutpat. Aenean at dui dictum dolor.

                  </p>
                </div>
              </div>
            </div>
          </div>




          <div className='container'>

            <div className='partner_p'>
              <p>PARTNER</p>
            </div>

            <div className="container">
              <div className='row'>
                <p className="fst_event_involved_sidebar">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis feugiat bibendum. Suspendisse vel gravida quam. Nullam ac tincidunt libero. Mauris leo diam, commodo ut consequat vel, viverra at metus. Donec auctor a massa quis luctus. Etiam in lorem viverra, sagittis dui at, vulputate magna. Nunc egestas pellentesque lacus, vehicula sollicitudin elit porttitor sit amet. Aliquam erat volutpat. Aenean at dui dictum dolor.

                </p>
              </div>
            </div>




          </div>




        </div>
      </div>
    </div>



  </div>
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

</>



     );
}
 
export default Get_involved;