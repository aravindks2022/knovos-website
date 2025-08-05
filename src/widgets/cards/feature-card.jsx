import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";

export function FeatureCard({ icon, title, description }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex flex-col items-center text-center px-6 py-10 border border-gray-800 rounded-2xl 
                 bg-gradient-to-br from-black/80 via-gray-900 to-black/70"
    >
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-[4px] bg-black rounded-full z-10" />
        <div className="absolute inset-[8px] flex items-center justify-center text-red-500 z-20">
          {icon}
        </div>
      </div>

      <Typography variant="h5" className="text-white font-bold leading-tight mb-2">
        {title}
      </Typography>
      <Typography className="text-sm text-gray-300 leading-relaxed">
        {description}
      </Typography>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "red",
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
