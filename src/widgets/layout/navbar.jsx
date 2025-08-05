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
  const location = useLocation();

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Determine if a route is active (supports hash routes like /home#team)
  const isActive = ({ path, hash }) => {
    const isAnchor = Boolean(hash);
    if (isAnchor) {
      return location.pathname === "/home" && location.hash === `#${hash}`;
    }
    return location.pathname === path;
  };

  const activeClasses =
  "font-heading text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300";
const baseClasses = "font-heading text-white hover:text-gray-300";

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-none text-white px-12 py-4 pt-5 border-none"
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
            const active = isActive({ path, hash });
            const isAnchor = Boolean(hash);
            const to = isAnchor ? `/home#${hash}` : path;
            const LinkComponent = isAnchor ? HashLink : Link;

            return (
              <LinkComponent
                key={name}
                to={to}
                smooth={isAnchor}
                className={`${active ? activeClasses : baseClasses} font-medium pb-2`}
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
          {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={openNav} className="lg:hidden text-white bg-black/90 px-6">
        <ul className="space-y-2 py-2">
          {routes.map(({ name, path, hash }) => {
            const active = isActive({ path, hash });
            const isAnchor = Boolean(hash);
            const to = isAnchor ? `/home#${hash}` : path;
            const LinkComponent = isAnchor ? HashLink : Link;

            return (
              <li key={name}>
                <LinkComponent
                  to={to}
                  smooth={isAnchor}
                  className={`${active ? activeClasses : baseClasses} block font-medium py-2`}
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
