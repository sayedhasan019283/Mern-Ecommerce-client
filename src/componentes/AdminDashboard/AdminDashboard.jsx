import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { FaDashcube } from "react-icons/fa6";
import Navbar from "../../Shared/Navbar/Navbar";


const AdminDashboard = () => {
    return (
        <div>
        <Navbar />
        <div className="flex">
            {/* Sidebar */}
            <div className="drawer lg:drawer-open w-80 lg:block ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  lg:hidden">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button "><FaDashcube/></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to="/dashboard/admin/order">admin</NavLink>
                        </li>
                        <li className="mt-4">
                            <NavLink to="/dashboard/admin/add-product">Add Product</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default AdminDashboard;