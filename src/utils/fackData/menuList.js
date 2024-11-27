export const menuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
    dropdownMenu: false
  },
  {
    id: 2,
    name: "About Us",
    path: '/about',
    dropdownMenu: false
  },
  {
    id: 3,
    name: "Services",
    path: "/service",
    dropdownMenu: [
      {
        id: 1,
        name: "Trading",
        path: "/service/trading",  // Correct path to the Trading service page
        subdropdownMenu: false // No sub-dropdown needed
      },
      {
        id: 2,
        name: "Contracting", 
        path: "/service/contracting",  // Correct path to the Contracting service page
        subdropdownMenu: false 
      }
    ]
  },
  {
    id: 4,
    name: "Products",
    path: "/product",
    dropdownMenu: false
  },
  {
    id: 5, 
    name: "Contact Us",
    path: "/contact",
    dropdownMenu: false
  },
];
