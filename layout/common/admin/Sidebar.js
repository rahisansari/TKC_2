import Link from "next/link";
export default function AdminSidebar() {
    return (
        <>

<nav role="navigation">
        <ul className="main">
          <li className="home">
            <Link href="/admin/home">Home Page</Link>
          </li>

          <li className="edit">
           <Link href="campaign_page">Campaign Page</Link>
          </li>

          <li className="write">
           <Link href="event_page">Event Page</Link>
          </li>

          <li className="comments">
           <Link href="donate_page">Donate</Link>
          </li>

          <li className="users">
           <Link href="get_involved_page">Get Involved</Link>
          </li>

          <li className="contact_us">
           <Link href="contact_us_page">Contact Us</Link>
          </li>
        </ul>
      </nav>
        </>
    )
}