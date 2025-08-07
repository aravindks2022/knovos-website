import PropTypes from "prop-types";
import { Card, Typography, IconButton } from "@material-tailwind/react";

export function TeamCard({ img, name, position, tagline, description, socials }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col w-full sm:w-1/2 lg:w-full 
                 px-4 mb-12 items-center border border-gray-800 rounded-2xl 
                 bg-gradient-to-br from-black/80 via-gray-900 to-black/70 
                transition-all duration-300"
    >
      {/* Avatar */}
      <div className="relative w-40 h-40 mt-8 mb-4 shrink-0">
  <img
    src={img}
    alt={name}
    className="absolute inset-[8px] object-cover object-top w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl z-20"
  />
</div>


      {/* Info section */}
      <div className="flex flex-col items-center text-center px-4 flex-1 w-full min-h-[250px] justify-start gap-1">
        <Typography variant="h5" className="text-white font-bold leading-tight mb-1">
          {name}
        </Typography>

        {position && (
          <Typography className="text-sm font-semibold text-gray-400 leading-tight mb-1">
            {position}
          </Typography>
        )}

        {tagline && (
          <Typography className="text-sm italic text-gray-500 leading-tight mb-2">
            {tagline}
          </Typography>
        )}

        {description && (
          <Typography className="text-sm text-gray-400 leading-relaxed">
            {description}
          </Typography>
        )}
      </div>

      {/* Social icons */}
      {socials && (
        <div className="mt-4 mb-6">
          <div className="flex justify-center gap-2">{socials}</div>
        </div>
      )}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  tagline: "",
  description: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
