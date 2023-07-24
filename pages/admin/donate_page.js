import AdminHeader from "@/layout/common/admin/Header";
import AdminSidebar from "@/layout/common/admin/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DonatePage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <AdminHeader />
      <AdminSidebar />

      <main role="main">
        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>Donate
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
              Donate Header
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
                  Donate Media
                </label><br/>
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
            <i className="fa fa-low-vision" aria-hidden="true"></i>Wish List
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
              Wish Header
            </label>
            <div className="row">
              <div className="col-md-10">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="headerText"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-2">
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

          <br />
          <hr />
          <div className="container">
            <label className="form-label-1" for="typeText">
              Student Text
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

          <br />

          <div className="container">
            <label className="form-label-1" for="typeText">
              Student PDF
            </label>
            <div className="row">
              <div className="col-md-4">
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

          <br />
          <hr />
          <div className="container">
            <label className="form-label-1" for="typeText">
              Homeless Text
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

          <br />
          <div className="container">
            <label className="form-label-1" for="typeText">
              Homeless PDF
            </label>
            <div className="row">
              <div className="col-md-4">
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
            <i className="fa fa-low-vision" aria-hidden="true"></i>Donation
            Tracking
          </h2>

          <div className="container">
            <label className="form-label-1" for="typeText">
              Donation Report:
            </label>
          </div>

          <br />

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
                    type="button"
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Donations List</strong>
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
                      <th>Amount</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Note</th>
                      <th>Q/A</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>abc</td>
                      <td>sdrwew</td>
                      <td>abc@gmail.com</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                      <td>acvf</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                    </tr>

                    <tr>
                    <td>1 </td>
                      <td>abc</td>
                      <td>sdrwew</td>
                      <td>abc@gmail.com</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                      <td>acvf</td>
                      <td>ccvfff</td>
                      <td>12-21-23</td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-right">
                  <p><b>Donation Total = $556.50</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i>
            Donation Types
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
            Zelle Text
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
                Zelle Image
                </label>
                <br/>
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
          <br /> <hr/> <br />

          <div className="container">
            <label className="form-label-1" for="typeText">
            CashApp Text
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
              CashApp Image
                </label>
                <br/>
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


           <br />

<div className="container">
  <label className="form-label-1" for="typeText">
  Mailing Text
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
<br />
<div className="container">
  <div className="row">
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
      </main>
    </>
  );
};

export default DonatePage;
