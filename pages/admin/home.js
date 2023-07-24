import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import store from "store";
import { Form } from "react-bootstrap";
import AdminHeader from "@/layout/common/admin/Header";
import AdminSidebar from "@/layout/common/admin/Sidebar";
import { useRouter } from "next/router";
import showNotification from "@/helpers/show_notification";
import axios from "axios";
import { APPCONST } from "@/store/constant/globalVar";
import { homePageService } from "@/store/services/homepageServices";
const Home = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const [image, setImage] = useState();
  const [headerText, setHeaderText] = useState();
  const [leftImage, setleftImage] = useState("");
  const [middleImage, setmiddleImage] = useState("");
  const [rightImage, setrightImage] = useState("");
  const [vissionText, setvissionText] = useState("");
  const [impactLink, setimpactLink] = useState("");
  const [latestIssueLink, setlatestIssueLink] = useState('');
  const [jobPostLink, setjobPostLink] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionPost, setSectionPost] = useState('');
  const [sectionImage, setSectionImage] = useState('');



  useEffect(() => {
    const item = localStorage.getItem(APPCONST.AccessToken);
    setTimeout(() => {
      if (!item) {
        router.push("/admin");
      }
    }, 1000);
  }, []);


  

  function onchangeFile(e) {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage(img);
    }
  }

  // const handleSubmitFounder = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("imgpath", "");
  //   formData.append("title", title);
  //   formData.append("post", post);

  //   // Create a new gift object

  //   try {
  //     const response = await axios.post(
  //       `https://nextupgrad.com/kindness_project/api/homepage_sec_meetOurFounder`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log(response);
  //     if (response.data.success == true) {
  //       showNotification(response.data.message, "Success");
  //       setTitle("");
  //       setPost("");
  //       setImage("");
  //     } else {
  //       showNotification(response.data.message, "Error");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };handleSubmitFounder

  // Homepage Static API //

  const updateStaticContent = async (fieldname) => {
    try {
      let formData = new FormData();
      formData.append("pageName", "home");

      console.log(
        fieldname,
        leftImage,
        middleImage,
        rightImage,
        vissionText,
        impactLink,
        latestIssueLink,
        jobPostLink,
      
      );

      if (fieldname == "headerText") {
        formData.append("headerText", headerText);
      }

      if (fieldname == "leftImage") {
        formData.append("leftImage", leftImage);
      }

      if (fieldname == "middleImage") {
        formData.append("middleImage", middleImage);
      }

      if (fieldname == "rightImage") {
        formData.append("rightImage", rightImage);
      }

      if (fieldname == "vissionText") {
        formData.append("vissionText", vissionText);
      }

      if (fieldname == "impactLink") {
        formData.append("impactLink", impactLink);
      }

      if (fieldname == "latestIssueLink") {
        formData.append("latestIssueLink", latestIssueLink);
      }


      if (fieldname == "jobPostLink") {
        formData.append("jobPostLink", jobPostLink);
      }

      

      if(fieldname == 'meet_founder'){
          if(sectionTitle?.target?.value){
            console.log('section_title', sectionTitle?.target?.value)
            formData.append("section_title", sectionTitle?.target?.value);
          }

          if(sectionPost?.target?.value){
            console.log('sectionPost', sectionPost?.target?.value)
            formData.append("section_post", sectionPost?.target?.value);
          }

          if(sectionImage?.target?.files[0]){
            formData.append("section_media", sectionImage?.target?.files[0]);
          }
      }






      const resp = await homePageService.staticContentUpdate(formData);

      console.log(resp);
      if (resp?.data?.success) {
        showNotification(resp.data.message, "Success");
      } else {
        showNotification(resp.data.message, "Error");
      }
    } catch (error) {}
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <main role="main">
        <section className="panel important">
          <h2>
            {" "}
            <i className="fa fa-low-vision" aria-hidden="true"></i> Mission &
            Vision
          </h2>
          <div className="container">
            <label className="form-label-1" for="typeText">
              Page Header Text
            </label>
            <div className="row">
              <div className="col-md-9">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="headerText"
                    onChange={(e) => setHeaderText(e?.target?.value)}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("headerText")}
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <label className="form-label-1" for="typeText">
                  Left Media
                </label>
              </div>

              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="file"
                  accept="leftImage/*"
                  onChange={(e) => setleftImage(e.target.files[0])}
                />
              </div>

              <div className="col-md-3">
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("leftImage")}
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
            <div className="row">
              <div className="col-md-3">
                <label className="form-label-1" for="typeText">
                  Middle Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="file"
                  accept="middleImage/*"
                  onChange={(e) => setmiddleImage(e.target.files[0])}
                />
              </div>

              <div className="col-md-3">
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("middleImage")}
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
            <div className="row">
              <div className="col-md-3">
                <label className="form-label-1" for="typeText">
                  Right Media
                </label>
              </div>
              <div className="col-md-3">
                <Image
                  src="/no-img.jpg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="file"
                  accept="rightImage/*"
                  onChange={(e) => setrightImage(e.target.files[0])}
                />
              </div>

              <div className="col-md-3">
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("rightImage")}
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* Compleate  */}
          <div className="container">
            <label className="form-label-1" for="typeText">
              Vision Text
            </label>
            <div className="row">
              <div className="col-md-9">
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    placeholder="Type here"
                    name="vissionText/*"
                    onChange={(e) => setvissionText(e?.target?.value)}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("vissionText")}
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
            <i className="fa fa-cube" aria-hidden="true"></i>{" "}
            Description/Accomplishment
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Total</th>
                      <th>Service</th>
                      <th>Impact Year </th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>500+ </td>
                      <td>Ultimate calendar for your React app.</td>
                      <td>2023</td>
                      <td>
                        <span className="btn ">Yes</span>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>500+ </td>
                      <td>Ultimate calendar for your React app.</td>
                      <td>2023</td>
                      <td>
                        <span className="btn ">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />

                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <label for="total" className="form-label-1">
                        Total
                      </label>
                      <input type="text" />
                    </div>

                    <div className="col-md-6">
                      <label for="Service" className="form-label-1">
                        Service
                      </label>
                      <br />
                      <input type="text" />
                    </div>

                    <div className="col-md-2">
                      <label for="Year" className="form-label-1">
                        Year
                      </label>
                      <input type="text" />
                    </div>

                    <div className="col-md-2 " style={{ bottom: "-50px" }}>
                      <label className="form-check-label">Active &nbsp;</label>
                      <input type="checkbox" value="" id="active" />
                    </div>

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

                    <div className="col-md-12">
                      <label for="total" className="form-label-1">
                        IMPACT Link
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="impactLink"
                        onChange={(e) => setimpactLink(e?.target?.value)}
                      />
                    </div>

                    <div className="col-md-12">
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={() => updateStaticContent("impactLink")}
                          className="btn btn btn-outline-primary align-bottom"
                        >
                          Update Site
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Meet Executives</h2>

          <div className="container">
            <label className="form-label-1" for="typeText">
              Executive List
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Overview </th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>Jame Williams </td>
                      <td>Executive Coordintor </td>
                      <td>Jame Williams Executive Coordintor</td>
                      <td>
                        <span className="btn ">Yes</span>
                      </td>
                    </tr>

                    <tr>
                      <td>1 </td>
                      <td>Jame Williams </td>
                      <td>Executive Coordintor </td>
                      <td>Jame Williams Executive Coordintor</td>
                      <td>
                        <span className="btn ">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label-1">Exec Name</label>
                      <input type="text" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label-1">Exec Title</label>
                      <input type="text" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3" style={{ bottom: "-20px" }}>
                      <label className="form-label-1">Exec. Media</label>
                    </div>

                    <div className="col-md-3">
                      <Image
                        src="/no-img.jpg"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>

                    <div className="col-md-3" style={{ bottom: "-20px" }}>
                      <input type="file" />
                    </div>

                    <div className="col-md-3 " style={{ bottom: "-20px" }}>
                      <label className="form-check-label">Active &nbsp;</label>
                      <input type="checkbox" value="" id="active" />
                    </div>
                  </div>
                  <br /> <br />
                  <div className="col-md-12">
                    <label className="form-label-1" for="typeText">
                      Exec Description
                    </label>

                    <div className="form-outline">
                      <textarea
                        className="form-control "
                        placeholder="Type here"
                        id="floatingTextarea"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Meet Our Founder</h2>
          <div className="container">
            <div className="row">




              <div className="col-md-6">
                <div className="form-group">
                  <label for="total" className="form-label-1">
                    Section Title
                  </label>
                  <input
                        type="text"
                        className="form-control"
                        name="section_title"
                        onChange={(e) => setSectionTitle(e)}
                      />
                </div>
              </div>


              <div className="col-md-6">
                <div className="form-group">
                  <label for="total" className="form-label-1">
                    Section Post
                  </label>


                  <textarea
                    className="form-control "
                    placeholder="Type here"
                    name="impactLink"
                    onChange={(e) => setSectionPost(e)}
                  ></textarea>


                </div>
              </div>

              <div className="col-md-12">
                <label for="total" className="form-label-1">
                  Section Media
                </label>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <Image
                    src="/no-img.jpg"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSectionImage(e)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn btn-outline-primary align-bottom"
                    style={{ float: "right" }}
                    onClick={()=> updateStaticContent('meet_founder')}
                  >
                    Update Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Campaign News</h2>

          <div className="container">
            <label className="form-label-1" for="typeText">
              Campaign News
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Views</th>
                      <th>Title</th>
                      <th>Media Type </th>
                      <th>Expire Date</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>132 </td>
                      <td>Ultimate calendar for your React app.</td>
                      <td>
                        {" "}
                        <Image
                          src="/no-img.jpg"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </td>
                      <td>7-06-2023 </td>
                      <td>
                        <span className="btn ">Yes</span>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>132 </td>
                      <td>Ultimate calendar for your React app.</td>
                      <td>
                        {" "}
                        <Image
                          src="/no-img.jpg"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </td>
                      <td>7-06-2023 </td>
                      <td>
                        <span className="btn ">Yes</span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <label className="form-label-1">News Title</label>
                      <input type="text" />
                      <label className="form-label-1">News Media</label>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <Image
                          src="/no-img.jpg"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label-1"> Upload Image </label>
                      <div className="form-group">
                        <input type="file" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label-1"> Expire Date </label>
                      <div className="form-group_1">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label-1">
                        Featured Item &nbsp;
                      </label>
                      <input type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                    <div className="col-md-2">
                      <label className="form-label-1">Active &nbsp;</label>
                      <input type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                    <br /> <br />
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <label className="form-label-1" for="typeText">
                            News Article
                          </label>
                          <div className="form-outline">
                            <textarea
                              className="form-control "
                              placeholder="Type here"
                              id="floatingTextarea"
                            ></textarea>
                          </div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="panel important">
          <h2>Putting Chicago to Work</h2>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <label className="form-label-1">Latest Issue Link</label>
                <input
                  type="text"
                  accept="latestIssueLink/*"
                  name="latestIssueLink"
                  onChange={(e) => setlatestIssueLink(e?.target?.value)}
                />

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("latestIssueLink")}
                    className="btn btn btn-outline-primary align-bottom"
                  >
                    Update Site
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label-1">Job Post Link</label>
                <input
                  type="text"
                  accept="jobPostLink/*"
                  name="jobPostLink"
                  onChange={(e) => setjobPostLink(e?.target?.value)}
                />

                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => updateStaticContent("jobPostLink")}
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
          <h2>Sponsors & Partners</h2>

          <div className="container">
            <label className="form-label-1" for="typeText">
              Executive List
            </label>
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Company</th>
                      <th>Title</th>
                      <th>Upload Date </th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 </td>
                      <td>132 </td>
                      <td>Sponsors & Partners</td>
                      <td>7/30/23</td>
                      <td>
                        <span className="btn ">Yes</span>{" "}
                      </td>
                    </tr>

                    <tr>
                      <td>2 </td>
                      <td>132 </td>
                      <td>Sponsors & Partners </td>
                      <td>7/30/23</td>
                      <td>
                        <span className="btn ">Yes</span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />

                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <label className="form-label-1">Company Name</label>
                      <input type="text" />
                    </div>

                    <div className="col-md-2">
                      <label className="form-label-1">View Media</label>
                      <Image
                        src="/no-img.jpg"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label-1"> Upload Image </label>
                      <div className="form-group">
                        <input type="file" />
                      </div>
                    </div>

                    <div className="col-md-2">
                      <label className="form-label-1">
                        Featured Item &nbsp;
                      </label>
                      <br />
                      <input type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                  </div>
                </div>

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

export default Home;
