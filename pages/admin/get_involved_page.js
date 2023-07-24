import AdminHeader from "@/layout/common/admin/Header";
import AdminSidebar from "@/layout/common/admin/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
const GetInvolved = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <AdminHeader />
      <AdminSidebar />

      <main role="main">
        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>Interest
            Setup
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Interest List</strong>
                </p>
              </div>

              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Interest Type </th>
                      <th>Input Date</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>abc</td>
                      <td>12-12-23</td>
                      <td>yes</td>
                    </tr>

                    <tr>
                      <td>1 </td>
                      <td>abc</td>
                      <td>12-12-23</td>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <p>
                  <strong>Interest</strong>
                </p>
              </div>
              <div className="col-md-6">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="headerText"
                  ></textarea>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-outline">
                  <label className="form-check-label">Active &nbsp;</label>
                  <input type="checkbox" value="" id="active" />
                </div>
              </div>

              <div className="col-md-3">
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

        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>Learn More
          </h2>
          <div className="container">
            <div className="row">
              <div className="container">
                <label className="form-label-1" for="typeText">
                  Learn More Header
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

                    <br />

                    <div className="col-md-12">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn btn-outline-primary align-bottom"
                        >
                          Update Site
                        </button>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <label className="form-label-1" for="typeText">
                  Learn More List
                </label>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Name </th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Interest</th>
                      <th>Message</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dsds</td>
                      <td>abc@gmail.com</td>
                      <td>545454544</td>
                      <td>yes</td>
                      <td>dfdfdf</td>
                      <td>34rerer</td>
                      <td>yes</td>
                    </tr>

                    <tr>
                      <td>dsds</td>
                      <td>abc@gmail.com</td>
                      <td>545454544</td>
                      <td>yes</td>
                      <td>dfdfdf</td>
                      <td>34rerer</td>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-right">
                  <p>
                    <b>Interested Total = 35</b>
                  </p>
                </div>
              </div>

              <div class="container">
                <label class="form-label-1" for="typeText">
                Interest Report:
                </label>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <label className="form-label-1"> Start Date </label>
                    <div className="form-group_1">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label-1"> End Date </label>
                    <div className="form-group_1">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>

                  <div class="col-md-4" style={{ marginTop: "auto" }}>
                    <div className="text-right">
                      <button
                      button type="submit" value="Submit"
                        className="btn align-bottom btn-success"
                      >
                       Download Report <i class="fa fa-download" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </section>


        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>Volunteer & Partner
          </h2>
          <div className="container">
            <div className="row">
              <div className="container">
                <label className="form-label-1" for="typeText">
                Volunteer Text
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

                    <br />

                    <div className="col-md-12">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn btn-outline-primary align-bottom"
                        >
                          Update Site
                        </button>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

            

             

        
            </div>

           
          </div>

          <div className="container">
            <div className="row">
              <div className="container">
                <label className="form-label-1" for="typeText">
                Partner Text
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

                    <br />

                    <div className="col-md-12">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn btn-outline-primary align-bottom"
                        >
                          Update Site
                        </button>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

            

             

        
            </div>

           
          </div>
        </section>



        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>Sign Up Today
          </h2>
          <div className="container">
            <div className="row">
        
            <div className="col-md-6">
                <p>
                <Link href=""> <strong>Sign Up List</strong></Link>
                </p>
              </div>
              <div className="col-md-6 text-right">
                <p>
                <Link href="">  <strong>Download List</strong></Link>
                </p>
              </div>
              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Count</th>
                      <th>Name </th>
                      <th>Email</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>dsds</td>
                      <td>abc@gmail.com</td>
                      <td>545454544</td>
                      <td>yes</td>
                      <td>dfdfdf</td>
                      <td>12-12-23</td>
                    
                    </tr>

                    <tr>
                    <td>dsds</td>
                      <td>abc@gmail.com</td>
                      <td>545454544</td>
                      <td>yes</td>
                      <td>dfdfdf</td>
                      <td>12-12-23</td>
                     
                    </tr>
                  </tbody>
                </table>
                <div class="text-right">
                  <p>
                    <b>Signup Total = 450</b>
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </section>

      </main>
    </>
  );
};

export default GetInvolved;
