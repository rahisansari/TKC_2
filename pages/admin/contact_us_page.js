import AdminHeader from "@/layout/common/admin/Header";
import AdminSidebar from "@/layout/common/admin/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
const ContactUs = () => {
  return (
    <>
      <AdminHeader />
      <AdminSidebar />

      <main role="main">
        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>
            Hear About Us (Share It)
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
              Share Header
            </label>
            <div className="row">
              <div className="col-md-12">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="headerText"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <label className="form-label-1" for="typeText">
                  Share Image
                </label>
                <br />
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-4">
                <input type="file" accept="middleImage/*" />
              </div>

              <div className="col-md-4">
                <br />
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>

              <hr />

              <div className="container">
                <br />

                <div className="row">
                  <div className="col-md-12">
                    <label className="form-label-1" for="typeText">
                      Share Text
                    </label>
                    <div className="form-outline">
                      <textarea
                        className="form-control"
                        placeholder="Type here"
                        name="headerText"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <br />
                    <label className="form-label-1" for="typeText">
                      Website Link
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <br />
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn align-bottom btn-success"
                  >
                    View Sample
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>
            Contact Us
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
              Contact Header
            </label>
            <div className="row">
              <div className="col-md-12">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="headerText"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <label className="form-label-1" for="typeText">
                  Share Image
                </label>
                <br />
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-4">
                <input type="file" accept="middleImage/*" />
              </div>

              <div className="col-md-4">
                <br />
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>

              <div className="container">
                <br />
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label-1" for="typeText">
                      Company Name
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-1" for="typeText">
                      Address
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label-1" for="typeText">
                      City, State, Zip
                    </label>
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-1" for="typeText">
                      Phone Number
                    </label>
                    <div className="form-outline">
                      <input
                        type="phone"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <label className="form-label-1" for="typeText">
                      Coorporate Email
                    </label>
                    <div className="form-outline">
                      <input
                        type="email"
                        className="form-control"
                        name="headerText"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <br />
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
