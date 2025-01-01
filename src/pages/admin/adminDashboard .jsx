import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import AdminHome from "./adminHome";
import ProductList from "./productList";
import AddProduct from "./addProduct";






 const AdminDashboard = () => {
  const [currentComponent, setCurrentComponent] = useState("AdminHome");

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
        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
        <CDBSidebarMenuItem icon="exit">Log Out</CDBSidebarMenuItem>
        </CDBSidebarFooter> */}
      </CDBSidebar>

      {/* Dynamic Content */}
      <div style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard 