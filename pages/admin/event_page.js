import AdminHeader from "@/layout/common/admin/Header";
import AdminSidebar from "@/layout/common/admin/Sidebar";
import Image from "next/image";
import TimePicker from "react-bootstrap-time-picker";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
const EventPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: "Fundraising", label: "Fundraising" },
    { value: "Awareness Campaigns", label: "Awareness Campaigns" },
    { value: "Community Service", label: "Community Service" },
    { value: "Cultural Celebrations", label: "Cultural Celebrations" },
    { value: "Education and Training", label: "Education and Trainings" },
  ];

  const options_2 = [
    { value: "State_1", label: "State_1" },
    { value: "State_2", label: "State_2" },
    { value: "State_3", label: "State_3" },
  ];

  return (
    <>
      <AdminHeader />
      <AdminSidebar />

      <main role="main">
        <section className="panel important">
          <h2>Event Categories</h2>
          <div className="container">
            <div className="row">
              <p>Event Category List</p>
              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Event Category Type</th>
                      <th>Description</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132</td>
                      <td>
                        Executive Coordintor Jame Williams Executive Coordintor{" "}
                      </td>
                      <td>Yes</td>
                    </tr>

                    <tr>
                      <td>2 </td>
                      <td>152</td>
                      <td>
                        Executive Coordintor Jame Williams Executive Coordintor{" "}
                      </td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-outline">
                      <label class="form-label" for="typeText">
                        Event Type
                      </label>
                      <input type="text" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-outline">
                      <label class="form-label" for="typeText">
                        Event Description
                      </label>
                      <textarea
                        className="form-control "
                        placeholder="Type here"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div class="col-md-6">
                    <label class="form-check-label">Active &nbsp;</label>
                    <input type="checkbox" value="" />
                  </div>

                  <div class="col-md-6">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{ float: "right" }}
                    >
                      Update Site
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Event Promotions Images</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>Event Promo Video</p>
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-4">
                <input type="file" />
              </div>

              <div className="col-md-4 text-right">
                <button
                  type="button"
                  className="btn btn btn-outline-primary align-bottom"
                >
                  Update Site
                </button>
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>Event Image List</p>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Order</th>
                        <th>Hits</th>
                        <th>Title</th>
                        <th>Media Type</th>
                        <th>Upload Date</th>
                        <th>Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1 </td>
                        <td>132</td>
                        <td>Executive Coordintor</td>
                        <td>Image</td>
                        <td>12/12/23</td>
                        <td>yes</td>
                      </tr>

                      <tr>
                        <td>2 </td>
                        <td>152</td>
                        <td>Yes</td>
                        <td>Image</td>
                        <td>12/12/23</td>
                        <td>yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <p>News Title</p>
                <div className="col-md-12">
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <p>News Media</p>
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-4">
                <input type="file" />
              </div>

              <div className="col-md-4">
                <label class="form-check-label">Active &nbsp;</label>
                <input type="checkbox" id="flexCheckDefault" value="" />
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
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Event Management</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Event List</p>
              </div>

              <div className="col-md-6">
                <p style={{ float: "right" }}>Download List</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Hits</th>
                      <th>Event Title</th>
                      <th># of RSVP</th>
                      <th>Date</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>1132</td>
                      <td>Executive Coordintor</td>
                      <td>1300</td>
                      <td>12/12/23</td>
                      <td>yes</td>
                    </tr>

                    <tr>
                      <td>2 </td>
                      <td>1352</td>
                      <td>text demo</td>
                      <td>123</td>
                      <td>12/12/23</td>
                      <td>yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>Event Title</p>
                  <input type="text" />
                </div>

                <div className="col-md-6">
                  <p>Description</p>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <label class="form-label">Date</label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>

                <div className="col-md-3">
                  <label class="form-label">Time</label>
                  <TimePicker start="10:00" end="21:00" step={30} />
                </div>

                <div className="col-md-6">
                  <label class="form-label">Event Type</label>
                  <Select options={options} />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label class="form-label">Location Address</label>
                  <input type="text" />
                </div>

                <div className="col-md-6">
                  <label class="form-label">City</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <label class="form-label">State</label>
                  <Select options={options_2} />
                </div>

                <div className="col-md-6">
                  <label class="form-label">Zip</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="container">
              <div className="row">
                <p>Event Media</p>
                <div className="col-md-3">
                  <Image
                    src="/no-img.jpg"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                </div>

                <div className="col-md-4">
                  <input type="file" />
                </div>

                <div className="col-md-3">
                  <label class="form-check-label">Active &nbsp;</label>
                  <input type="checkbox" id="flexCheckDefault" value="" />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-6">
                  <label class="form-label">Event Cost</label>
                  <input type="text" />
                </div>

                <div className="col-md-6">
                  <div class="text-right">
                    <button type="button" className="btn btn-outline-primary">
                      Update Site
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>(Event Name) RSVP List</strong>
                </p>
              </div>
              <div className="col-md-6 text-right">
                <p>
                  <strong>Download List</strong>
                </p>
              </div>

              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Count</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>State</th>
                      <th>RSVP Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>abc</td>
                      <td>abc@gmail.com</td>
                      <td>acvf</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                    </tr>

                    <tr>
                      <td>2 </td>
                      <td>abc</td>
                      <td>abc@gmail.com</td>
                      <td>acvf</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-right">
                  <p>RSVP Total = 338</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventPage;
