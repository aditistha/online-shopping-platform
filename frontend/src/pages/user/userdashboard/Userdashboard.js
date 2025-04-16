import { Outlet } from "react-router-dom";
import Navbar from "../../../components/user/navbar/Navbar";
import  Footer from "../../../components/user/footer/Footer";

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />  
      <Footer/>
    </div>
  );
};

export default UserDashboard;