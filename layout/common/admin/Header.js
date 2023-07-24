import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import store from "store";

import AdminSidebar from "./Sidebar";
import showNotification from "@/helpers/show_notification";
import { useRouter } from 'next/router';

export default function AdminHeader(props) {
    const item = store.get("user")
    // let user = JSON.parse(item && item);
    // console.log(item.name.name, "item");
    const router = useRouter()
    // console.log('props', props);
    function logout() {
       store.clearAll();
       store.clearAll("user");
        showNotification("Logout successfully", "Success");
        router.push("/admin");
    }
    return (
        <>
            <Head>
                <meta name="description" content="Kindness Campaign" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props?.title}</title>
            </Head>

            <header role="banner">
                <h1> <i className="fa fa-tachometer" aria-hidden="true"></i> Admin Panel</h1>
                <ul className="utilities">
                    <br />
                    <li className="users">
                        <Link href="#">{item && item.name && item.name.name}</Link>
                    </li>
                    <li onClick={logout} className="logout warn">
                        <Link href="#">Log Out</Link>
                    </li>
                </ul>
            </header>

            <AdminSidebar />
        </>
    )
}