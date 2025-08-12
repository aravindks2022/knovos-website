import React from "react";
import { Typography } from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";

export function Home() {
  return (
    <section
      className="relative bg-top bg-repeat text-white min-h-screen"
      style={{
        backgroundImage: "url('/img/background-custom-2.png')",
        backgroundSize: "auto",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* All page content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography variant="h1" className="mb-6 font-black text-white">
                  <span className="bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Data Management, Redef<span className="text-red-500">AI</span>ned
                  </span>
                </Typography>
                <Typography variant="lead" className="text-white opacity-80">
                  Your bridge to Legal Tech Excellence — In Collaboration with Knovos, a pioneer in AI-Powered Legal Workflow, ESG, Arbitration, and Case Management Solutions
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards + What We Do Section */}
        <section className="-mt-32 px-4 pb-10 pt-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map(({ color, title, icon, description }) => (
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              ))}
            </div>

            <div className="mt-32 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full md:w-8/12 text-center">
                <div
                  id="whatwedo"
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 p-2 text-center shadow-lg"
                >
                  <BriefcaseIcon className="h-8 w-8 text-white mx-auto" />
                </div>
                <Typography variant="h3" className="mb-3 font-bold text-white">
                  What We Do
                </Typography>
                <Typography className="mb-8 font-normal text-gray-300 text-left">
                  At MantraDATA Consulting, we empower law firms, corporate legal departments,
                  and ESG-driven organizations to streamline their operations through advanced legal and ESG technology solutions.
                  As a trusted implementation and sales partner of Knovos, a global leader in legal tech, we help clients adopt cutting-edge platforms for eDiscovery,
                  contract lifecycle management, compliance, collaboration, and litigation support.
                  <br />
                  <br />
                  We specialize in bridging the gap between legal expertise and technology by offering tailored digital solutions that improve efficiency,
                  ensure regulatory alignment, and unlock strategic value. Whether it's automating workflows, managing data securely,
                  collaborative work process, or supporting ESG compliance, we enable legal and compliance teams to perform more—with confidence and clarity.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
