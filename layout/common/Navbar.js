import Link from "next/link";
export default function Navbar() {
    return (
        <>
   <section id="hero" className="hero">
    <header id="header" className="header d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/logo.png" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">The Campaign</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
            <Link href="#">Support</Link>
            </li>
            <li>
            <Link href="/contact_us">Contact</Link>
            </li>
            <li>
              <div className="input-group">
                <input
                  className="form-control border-end-0 border rounded-pill"
                  type="search"
                  defaultValue="Search"
                />
              </div>
            </li>
          </ul>
        </nav>
   
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </div>
    </header>
    </section>
          
        </>
    )
}