import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="bg-black text-white relative px-4 pb-6">
      <div className="container mx-auto max-w-screen-xl">
        {/* wrapper */}
        <div className="pt-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 text-center lg:text-left">
          
          {/* Company Info - hidden on mobile */}
          <div className="hidden lg:block px-4 lg:basis-4/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white lg:w-4/5 text-lg">
              Data Management, Redef
              <span className="text-red-500 font-semibold">AI</span>
              ned
            </Typography>
          </div>

          {/* Useful Links */}
          <div className="mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 place-items-center lg:place-items-start text-center lg:text-left">
            {menus.map(({ name, items }) => (
              <div key={name} className="w-max lg:w-auto">
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-yellow-300 transition-colors"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="px-4 w-full lg:basis-4/12 max-w-md lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
            <Typography
              variant="small"
              color="white"
              className="mb-2 block font-medium uppercase"
            >
              Contact Details
            </Typography>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                <a
                  href="mailto:Rama.Saravana@mantradataconsultants.com"
                  className="hover:text-yellow-800 transition-colors"
                >
                  Rama.Saravana@mantradataconsultants.com
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <PhoneIcon className="w-5 h-5" />
                <a
                  href="tel:+6591891365"
                  className="hover:text-yellow-800 transition-colors"
                >
                  +65 9189 1365
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <i className="fa-brands fa-linkedin text-xl text-gray-400 transition-all duration-300" />
                <a
                  href="https://www.linkedin.com/company/mantradata-consultants/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-800 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-center text-center">
          <div className="mx-auto w-full px-4">
            <Typography variant="small" className="font-normal text-gray-400">
              © {year} MantraDATA Consultants
              <span className="text-xs text-gray-600 block mt-1">
                Built with Material Tailwind by{" "}
                <a
                  href="https://www.creative-tim.com?ref=mtk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Creative Tim
                </a>
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "MantraDATA Consultants",
  description: "Data Management, RedefAIned",
  menus: [
    {
      name: "Links to Other Pages",
      items: [
        { name: "Home", path: "/home" },
        { name: "Contact Us", path: "/contactus" },
        { name: "Solutions", path: "/solutions" },
        { name: "About Us", path: "/about-us" },
        { name: "End-To-End Support", path: "/end-to-end" },
      ],
    },
  ],
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
