import { Home, ContactUs, Solutions, EndToEndSupport, AboutUs } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "End-to-End",
    path: "/end-to-end",
    element: <EndToEndSupport />,
  },
  {
    name: "Our Solutions",
    path: "/solutions",
    element: <Solutions />,
  },
  
  {
    name: "Contact",
    path: "/contactus",
    element: <ContactUs />,
  },
];

export default routes;
