import {
  MagnifyingGlassIcon,
  CloudIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowsPointingInIcon,
  Cog8ToothIcon
} from "@heroicons/react/24/solid";
import { Handshake } from "lucide-react";

export const steps = [
  {
    title: "Pre-Sales Stage - Consultation",
    icon: Handshake,
    description:
      "Our approach goes beyond selling. From the earliest stages of engagement, we work closely with you to understand your needs, present tailored solutions, and ensure our efforts deliver sustainable, long-term productivity.",
  },
  {
    title: "Current Systems Assessment",
    icon: MagnifyingGlassIcon,
    description:
      "We begin by assessing your existing processes, systems, and data practices to identify operational gaps, compliance needs, and integration points.",
  },
  {
    title: "Infrastructure & Cloud Readiness",
    icon: CloudIcon,
    description:
      "We evaluate technical prerequisites like server capacity, cloud adoption readiness, and data governance—ensuring secure, efficient integration of Knovos solutions.",
  },
  {
    title: "Hassle-free Implementation",
    icon: Cog8ToothIcon,
    description:
      "We collaborate with your team to implement the agreed solution seamlessly and efficiently, ensuring they are fully engaged, well-trained, and equipped with both the functional and infrastructure knowledge needed to maximize its benefits.",
  },
  {
    title: "Seamless Onboarding & Team Alignment",
    icon: RocketLaunchIcon,
    description:
      "We identify key users, align internal teams, and assign dedicated MantraDATA leads to drive a smooth, strategic onboarding experience with minimal disruption.",
  },
  {
    title: "Training & Hands-On Guidance",
    icon: AcademicCapIcon,
    description:
      "We conduct live demos, interactive sessions, and tailored learning paths to ensure every user—power or occasional—is confident and capable.",
  },
  {
    title: "Continuous Engagement & Optimization",
    icon: ArrowPathIcon,
    description:
      "Our support continues post go-live with usage monitoring, gap identification, feature improvement recommendations, and responsive issue handling.",
  },
  {
    title: "Customer Success, Not Just Support",
    icon: ArrowsPointingInIcon,
    description:
      "We are committed to ensuring you gain maximum value from our solutions, providing ongoing support and updates to the latest versions for sustained success.",
  },
];

export default steps;
