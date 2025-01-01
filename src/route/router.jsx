import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import HomeOne from "../pages/home-1";
import LayoutThree from "../layout/layoutThree";
import AboutOne from "../pages/about-1";
import ServiceOne from "../pages/service-1";
import ServiceTwo from "../pages/service-2";
import ServiceDetails from "../pages/service-details";
import Contact from "../pages/contact";
import Product from "../pages/Product";
import Login from "../pages/admin/login";
import AdminDashboard from "../pages/admin/adminDashboard ";
// import AdminDashboard from "../pages/adminDash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
    ],
  },
  {
    path: "/about",
    element: <LayoutThree />,
    children: [
      {
        path: "", // This will match /about
        element: <AboutOne />,
      },
    ],
  },
  {
    path: "/service",
    element: <LayoutThree />,
    children: [
      {
        index: true,
        element: <ServiceTwo />, // Default service page
      },
      {
        path: "trading", // /service/trading
        element: <ServiceTwo />,
      },
      {
        path: "contracting", // /service/contracting
        element: <ServiceOne />,
      },
      {
        path: "service-details/:id", // /service/service-details
        element: <ServiceDetails />,
      },
    ],
  },
  {
    path: "/product",
    element: <LayoutThree />,
    children: [
      {
        path: "", // This will match /product
        element: <Product />,
      },
    ],
  },
  {
    path: "/contact",
    element: <LayoutThree />,
    children: [
      {
        path: "", // This will match /contact
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: "",
    children: [
      {
        path: "", // This will match /contact
        element: <Login />,
      },
    ],
  },
  {
    path: "/homead",
    element: "",
    children: [
      {
        path: "", // This will match /contact
        element: <AdminDashboard />,
      },
    ],
  },
]);
