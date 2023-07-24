import Head from 'next/head';
import withAuth from '../store/middleware/withAuth';
import AdminHeader from './common/admin/Header';
import AdminSidebar from './common/admin/Sidebar';
import AdminFooter from './components/admin/Footer';


const AdminLayout = ({ children, title = "Kindness Campaign Panel", sidebarTitle = "Kindness Admin Panel" }) => {
   

    return (
        <>
            
                <>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta name="viewport" content="viewport-fit=cover" />
                        <title>{title}</title>
                    </Head>
                    <div className="super-admin-layout">
                        <AdminSidebar  />
                        <div className="content-outer-wrapper">
                            <AdminHeader sidebarTitle={sidebarTitle} />
                            <main className="content-wrapper">
                                {children}
                            </main>
                            <AdminFooter /> 
                          
                    </div>
                    </div>
                </>
               
            
        </>
    );
};

export default withAuth(AdminLayout);
