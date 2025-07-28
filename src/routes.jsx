import { Home, Profile, SignIn, SignUp, ContactUs, Solutions } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  // {
  //   name: "Solutions",
  //   path: "/solutions",
  //   element: <Solutions />,
  // },
  {
    name: "Contact Us",
    path: "/contactus",
    element: <ContactUs />,
  },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  //   {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
