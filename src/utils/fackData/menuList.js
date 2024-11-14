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
          path: "/service",  // Ensure this path points to the correct service page for Trading
          subdropdownMenu: false // Optionally, you can remove this if no sub-dropdown is needed
        },
        {
          id: 2,
          name: "Contracting", 
          path: "page2",  
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
  