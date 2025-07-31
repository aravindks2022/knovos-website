import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";  
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6 text-white">
      {routes.map(({ name, path }) => (
        <li key={name}>
          <Link to={path} className="text-white font-bold hover:text-gray-300">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <MTNavbar
  fullWidth
  shadow={false}
  className="w-full !bg-black text-white px-12 py-4 pt-5 border-none"
>
  <div className="flex items-center justify-between w-full">
    {/* Logo */}
    <div className="flex items-center">
      <Link to="/">
        <Typography className="font-bold text-white text-2xl flex items-center gap-2">
          <img src="/img/mantralogo.png" alt="Logo" className="h-8" />
          {brandName}
        </Typography>
      </Link>
    </div>

    {/* Desktop Nav */}
    <div className="hidden lg:flex space-x-6">
      {routes.map(({ name, path, hash }) => {
        const isAnchor = Boolean(hash);
        const to = isAnchor ? `/home#${hash}` : path;
        const LinkComponent = isAnchor ? HashLink : Link;

        return (
          <LinkComponent
            key={name}
            to={to}
            smooth={isAnchor} // only HashLink supports this
            className="text-white font-semibold hover:text-gray-300"
          >
            {name}
          </LinkComponent>
        );
      })}
    </div>

    {/* Hamburger Icon */}
    <IconButton
      variant="text"
      color="white"
      onClick={() => setOpenNav(!openNav)}
      className="lg:hidden"
    >
      {openNav ? (
        <XMarkIcon className="h-6 w-6" />
      ) : (
        <Bars3Icon className="h-6 w-6" />
      )}
    </IconButton>
  </div>

  {/* Mobile Nav */}
  <MobileNav open={openNav} className="lg:hidden text-white bg-black px-6">
    <ul className="space-y-2 py-2">
      {routes.map(({ name, path, hash }) => {
        const isAnchor = Boolean(hash);
        const to = isAnchor ? `/home#${hash}` : path;
        const LinkComponent = isAnchor ? HashLink : Link;

        return (
          <li key={name}>
            <LinkComponent
              to={to}
              smooth={isAnchor}
              className="text-white block font-medium hover:text-gray-300"
              onClick={() => setOpenNav(false)}
            >
              {name}
            </LinkComponent>
          </li>
        );
      })}
    </ul>
  </MobileNav>
</MTNavbar>



    </>
  );
}

Navbar.defaultProps = {
  brandName: "MantraDATA Consultants",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;
