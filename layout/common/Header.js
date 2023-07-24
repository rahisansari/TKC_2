import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import logo from "../../styles/assets/img/logo.png"

import pizzamaker from "../../styles/assets/img/pizza-maker.jpg"
import design1 from "../../styles/assets/img/design-1.png"

export default function Header(props) {
    console.log('props 1', props);
    return (
        <>
            <Head>
                <meta name="description" content="Kindness Campaign" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props?.title}</title>
            </Head>

    <section id="topbar" className="topbar d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <p className="top-header-heading">
            Every dollar counts! Support our critical work by making a
            tax-deductible contribution today - - &gt;
          </p>
        </div>
        <div className="col-md-2">
          <h4 className="donate-button">
            <a href="#">
              <strong>
                <u>DONATE NOW</u>
              </strong>
            </a>{" "}
          </h4>
        </div>
      </div>
    </div>
  </section>






        </>
    )
}