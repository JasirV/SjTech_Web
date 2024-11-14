import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import HomeOne from "../pages/home-1";
import LayoutTwo from "../layout/layoutTwo";
import LayoutThree from "../layout/layoutThree";
import AboutOne from "../pages/about-1";
import ServiceOne from "../pages/service-1";
import ServiceTwo from "../pages/service-2";
import ServiceDetails from "../pages/service-details";
import Contact from "../pages/contact";
import Product from "../pages/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true, 
                element: <HomeOne />
            }
        ]
    },
    {
        path: "/about",
        element: <LayoutTwo />,
        children: [
            {
                path: "/about", 
                element: <AboutOne />
            }
        ]
    },
    {
        path: "/service", 
        element: <LayoutThree />,
        children: [
            {
                index: true, 
                element: <ServiceTwo />
            },
            {
                path: "page2", 
                element: <ServiceOne />
            },
            {
                path: "service-details", 
                element: <ServiceDetails />
            }
        ]
    },
    {
        path: "/product",
        element: <LayoutThree />,
        children: [
            {
                path: "/product",
                element: <Product />
            }
        ]
    },
    {
        path: "/contact",
        element: <LayoutThree />,
        children: [
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);
