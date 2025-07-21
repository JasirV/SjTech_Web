import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import AdminHome from "./adminHome";
import ProductList from "./productList";
import AddProduct from "./addProduct";
import { useNavigate } from "react-router";
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

 const AdminDashboard = () => {
  const [currentComponent, setCurrentComponent] = useState("AdminHome");
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      navigate('/login') 
    }
  }, [navigate]);
  const renderComponent = () => {
    switch (currentComponent) {
      case "AdminHome":
        return <AdminHome />;
      case "ProductList":
        return <ProductList />;
      case "AddProduct":
        return <AddProduct />;
      default:
        return <AdminHome />;
    }
  };
  const handleLogout=async()=>{
    await signOut(auth);
    localStorage.clear()
    navigate('/')
  }

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <CDBSidebar textColor="#FFFFFF" backgroundColor="#312D81">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{color:"white"}}></i>}>
          <h3 style={{ color: "white" }}>Admin</h3>
        </CDBSidebarHeader>
        <CDBSidebarContent textColor="#FFFFFF" className="sidebar-content">
          <CDBSidebarMenu>
            <div onClick={() => setCurrentComponent("AdminHome")}>
              <CDBSidebarMenuItem icon="th-large" ><p style={{ color: "white" }}>Admin Home </p></CDBSidebarMenuItem>
            </div>
            <div onClick={() => setCurrentComponent("ProductList")}>
              <CDBSidebarMenuItem icon="list"> <p style={{ color: "white" }}>Product List </p></CDBSidebarMenuItem>
            </div>
            <div onClick={() => setCurrentComponent("AddProduct")}>
              <CDBSidebarMenuItem icon="plus"><p style={{ color: "white" }}>Add Product</p></CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter >
        <div onClick={handleLogout} style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
        <div style={{display:'flex',gap:'10px',margin:'auto'}}><FaSignOutAlt  size={25} /><p style={{ color: "white" }}></p></div>
              </div>
        </CDBSidebarFooter>
      </CDBSidebar>

      {/* Dynamic Content */}
      <div style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard 