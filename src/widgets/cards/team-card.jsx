import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, tagline, description, socials }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col h-full w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 items-center border-gray-300 border rounded-lg hover:shadow-lg transition-shadow duration-300"
    >
      {/* Top content grows to fill height */}
      <div className="flex flex-col items-center flex-grow">
        <Avatar
          src={img}
          alt={name}
          size="xxl"
          variant="rounded"
          className="w-48 h-48 shadow-lg shadow-gray-500/25 mb-4 mt-5"
        />
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-1 max-w-xs text-center"
        >
          {name}
        </Typography>

        {position && (
          <Typography className="font-bold text-blue-gray-500 max-w-xs text-center">
            {position}
          </Typography>
        )}

        {tagline && (
          <Typography className="text-sm text-blue-gray-400 mt-1 max-w-xs text-center">
            {tagline}
          </Typography>
        )}

        {description && (
          <Typography className="text-sm text-blue-gray-600 mt-2 max-w-xs text-center">
            {description}
          </Typography>
        )}
      </div>

      {/* Bottom-aligned social icons */}
      {socials && (
        <div className="mt-4 mb-2">
          <div className="flex justify-center">{socials}</div>
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
