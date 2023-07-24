import Link from "next/link"
import foterlogo from "../../styles/assets/img/footer_logo.png"


export default function Footer() {
    return (
        <>
           

           <footer id="footer" className="footer">
    <div className="container">
      <div className="row">
      <div className="col-md-3 footer-info" style={{ textAlign: "right" }}>
 
          <a href="/">
            <img src="/footer_logo.png" />
          </a>
        </div>
        <div className="col-md-6 footer-info">
          <p>
            Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat ed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.
          </p>
          <div className="row">
            <div className="col-md-6">
              <p className="footer_btn">
                <a href="#">
                  {" "}
                  <i className="fa fa-arrow-right" aria-hidden="true" />{" "}
                  <span> SUPPORT US </span>
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <p className="footer_btn">
                <a href="#">
                  <i className="fa fa-arrow-right" aria-hidden="true" />{" "}
                  <span> CONTACT US </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h4>The Kindness Campaign</h4>
          <p className="footer_p">
            703 E 75th St
            <br />
            Chicago, IL 60619
            <br />
            773.222.2222
            <br />
            <a href="mailto:info@kindnesseveryday.org" className="mail_color">
              {" "}
              info@kindnesseveryday.org
            </a>
            <br />
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="row">
          <div className="col-md-6 footer-info  border-right">
            <h4 className="footer_wrap">
              Get exclusive updates on our work <br/>and how you can help.
            </h4>
            <button type="butto1" className="footer_sign social_1">
              {" "}
              SIGN UP TODAY <div />
            </button>
          </div>
          <div className="col-md-6 footer-info">
            <h4 className="footer_wrap">
              Think people should hear about this? <br/>Share it.
            </h4>
            <div className="social-links d-flex mt-4 social_1">
              <a href="#" className="twitter">
                <i className="bi bi-youtube" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  {/* Bottom Footer */}

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <p className="bottom_wrap align-middle">
          © 2023 by The Kindess Campaign. &nbsp;&nbsp;{" "}
          The Kindness Campaign is a 501©3 organization.{" "}
        </p>
      </div>
    </div>
  </div>

        </>
    )
}