import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Layout from '@/layout/layoutTemplate';
import Image from 'next/image';
const About = () => {
    return (
      <Layout title='About Us'> 
             
            <section className="hero">
          <div className="container-fluid about_bg_wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="about_the_campaign mt-10">
                    ABOUT THE KINDNESS CAMPAIGN
                  </h1>
                  <h4 className="About_heading-1">
                    The Kindness Campaign creates local leaders, involved community
                    members, engaged businesses and at-promise young adults through
                    leadership of impact initiatives.
                  </h4>
                </div>
              </div>
            </div>
            <div className="container aos-init aos-animate mb-5" data-aos="fade-up">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="about_video">
                  <video autoPlay width="100%" height={300} controls="true">
             <source src="/demo-video.mp4" />
             </video>
                  </div>
                </div>
                <div className="col-md-6 about_p">
                  <p className="about_p">
                    <strong>The Kindness Campaign </strong>is dedicated to
                    implementing fearless approaches to initiate social change and
                    foster improvement. We believe in partnering across lines with
                    individuals and stakeholders who share our beliefs, in order to
                    engage people and <strong>create positive change</strong> within
                    the community. Our services are guided by a set of core values,
                    which include <strong>Health</strong> Equity,
                    <strong>Education</strong>
                    Equity, Workforce Equity, and <strong>Public </strong>Equity
                  </p>
                </div>
              </div>
              <br/>
            </div>
          </div>
        </section>

        <Image src="/design-1.png"
                  width={1920}
                  height={84}
                  alt="Picture of the design"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <h3 className="about_wrap_heading">Health Equity</h3>
                <p className="about_wrap">
                  Health Equity is our commitment to reduce and eliminate disparities
                  in health and in its determinants, including social determinants.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </p>
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                <video autoPlay width="100%" height="auto" controls="true">
             <source src="/demo-video.mp4" />
             </video>
                </div>
              </div>
              <div className="col-md-3">
              <Image  src="/about_video_2.png" 
                  width={180}
                  height={220}
                  className="about_img_bottom "
                />
              </div>
            </div>
          </div>
          <div className="container mt-5 bg_border">
            <div className="row">
              <div className="col-md-4">
                <ul className="about_ul_li">
                  <li>Diet &amp; Exercise</li>
                  <li>Healthcare Access</li>
                  <li>Behavioral Health</li>
                  <li>Everyone Against Racism</li>
                </ul>
              </div>
              <div className="col-md-3">
                <Image  src="/about_video_1.png" 
                  width={180}
                  height={220}
                  className="about_img_top"
                />
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                

                <Image  src="/news-title-4.png" 
                  width={465}
                  height={300}
                  className="about_img_top"/>


                 
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <h3 className="about_wrap_heading">Education Equity</h3>
                <p className="about_wrap">
                  Education Equity is our commitment to practices, policies and
                  procedures at the school and district level to achieves academic
                  fairness, inclusion and matriculation for every student. This
                  provides students the resources, teachers, interventions and
                  supports they need to be successful.
                </p>
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                <video autoPlay width="100%" height="auto" controls="true">
             <source src="/demo-video.mp4" />
             </video>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="/about_video_2.png" 
                  className="about_img_bottom "
                />
              </div>
            </div>
          </div>
          <div className="container mt-5 bg_border">
            <div className="row">
              <div className="col-md-4">
                <ul className="about_ul_li">
                <li>Service Learning</li>
                  <li>Social &amp; Emotional Learning</li>
                  <li>Out-Of-School Activities</li>
                </ul>
              </div>
              <div className="col-md-3">
                <img src="/about_video_1.png" className="about_img_top" />
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                 <img src="/news-title-4.png" className="responsive"/>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <h3 className="about_wrap_heading">Workforce Equity</h3>
                <p className="about_wrap">
                Workforce Equity is our commitment to a labor market in which bias
                  income gaps are eliminated, all jobs are good careers and everyone
                  who wants to work has access to self-supporting and family
                  supporting employment.
                </p>
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                <video autoPlay width="100%" height="auto" controls="true">
             <source src="/demo-video.mp4" />
             </video>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="/about_video_2.png" 
                  className="about_img_bottom "
                />
              </div>
            </div>
          </div>
          <div className="container mt-5 bg_border">
            <div className="row">
              <div className="col-md-4">
                <ul className="about_ul_li">
                <li>Career Counseling</li>
                  <li>Career Placement Assistance</li>
                  <li>Youth Summer Employment &amp; Training</li>
                  <li>Career Training</li>
                </ul>
              </div>
              <div className="col-md-3">
                <img src="/about_video_1.png" className="about_img_top" />
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                 <img src="/news-title-4.png" className="responsive"/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <h3 className="about_wrap_heading">Public Equity</h3>
                <p className="about_wrap">
                Public Equity our commitment to fairness and justice in the
                  formulation of public policy, distribution of public services,
                  implementation of policy and management of all institutions serving
                  the public directly or by contract.
                </p>
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                <video autoPlay width="100%" height="auto" controls="true">
             <source src="/demo-video.mp4" />
             </video>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="/about_video_2.png" 
                  className="about_img_bottom "
                />
              </div>
            </div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-4">
                <ul className="about_ul_li">
                <li>Ownership &amp; Investment</li>
                  <li>Creating A Welcoming Community</li>
                  <li>Financial Empowerment</li>
                  <li>Civic Leadership</li>
                </ul>
              </div>
              <div className="col-md-3">
                <img src="/about_video_1.png" className="about_img_top" />
              </div>
              <div className="col-md-5">
                <div className="about_video_1">
                 <img src="/news-title-4.png" className="responsive"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </Layout>

    )
}

export default About;