import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="bg-black text-white relative px-4 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left gap-12 lg:gap-0">
          
          {/* Company Info */}
          <div className="w-full px-4 lg:w-4/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-white lg:w-4/5">
              {description}
            </Typography>
          </div>

          {/* Useful Links */}
          <div className="mx-auto grid w-max grid-cols-2 gap-24">
            {menus.map(({ name, items }) => (
              <div key={name}>
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
          <div className="w-full px-4 lg:w-4/12">
            <Typography
              variant="small"
              color="white"
              className="mb-2 block font-medium uppercase"
            >
              Contact Details
            </Typography>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                <a
                  href="mailto:Rama.Saravana@mantradataconsultants.com"
                  className="hover:text-yellow-300 transition-colors"
                >
                  Rama.Saravana@mantradataconsultants.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <a
                  href="tel:+6591891365"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +65 9189 1365
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap items-center justify-center md:justify-between text-center">
          <div className="mx-auto w-full px-4">
            <Typography variant="small" className="font-normal text-gray-400">
              © {year} Mantra Data Consultants  
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
  title: "Mantra Data Consultants",
  description: "Data Management, RedefAIned",
  socials: [],
  menus: [
    {
      name: "useful links",
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
