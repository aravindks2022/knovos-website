import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { teamData } from "@/data";
import { TeamCard } from "@/widgets/cards";
import SEO from "@/widgets/layout/SEO";

export function AboutUs() {
  return (
    <>
      <SEO title="About Us | Case Management Software Singapore | ESG Compliance Solutions Singapore | MANTRADATA Legal Tech | Arbitration Technologies | e-Discovery Solutions" 
      description="Helping law firms and corporates with legal tech consulting, ESG compliance, arbitration technology, AI-powered eDiscovery, AI in legal, AI for legal works, AI in paralegal, AI smarter solutions, legal customers privacy, legal documentation management, DSAR management" />
      <section
        className="relative bg-top bg-repeat text-white"
        style={{
          backgroundImage: "url('/img/background-custom-2.png')",
          backgroundSize: "auto",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 px-6 md:px-12 py-20 space-y-24 max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-20">
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elevating Legal and ESG Outcomes Through Expertise and Technology
            </p>
          </div>

          {/* Who We Are */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-black/80 via-gray-900 to-black/70 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 via-orange-400 to-yellow-300 rounded-sm" />
              <Typography variant="h4" className="font-bold text-white">
                Who We Are
              </Typography>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                MantraDATA Consultants is a Singapore-based advisory firm focused on helping legal and ESG-driven organizations navigate the digital age with clarity and control.
              </p>
              <p>
                We partner with law firms, in-house legal teams, and compliance leaders to simplify complexity — from data governance and workflow automation to secure collaboration and regulatory readiness.
              </p>
              <p>
                As an implementation partner of Knovos, we bring global technology to local needs — with onboarding, training, and long-term support built into every engagement.
              </p>
            </div>
          </div>

          {/* Mission + Vision + Goal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Vision",
                text: "To be Southeast Asia’s trusted partner for digital legal and ESG transformation — built on trust, clarity, and innovation.",
              },
              {
                title: "Our Mission",
                text: "Empower law firms, corporate legal departments, arbitrators, dispute resolvers, and ESG-driven organizations enhance performance, streamline compliance & safeguard information.",
              },
              {
                title: "Our Goal",
                text: "Help clients build smarter, more secure, and more sustainable legal, arbitration, dispute resolution and compliance operations through tailored cutting edge AI technology implementation consulting.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-black/80 via-gray-900 to-black/70 shadow-md space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-red-600 via-orange-400 to-yellow-300 rounded-sm" />
                  <Typography variant="h5" className="font-semibold text-white">
                    {item.title}
                  </Typography>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mt-2 pl-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-black/80 via-gray-900 to-black/70 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 via-orange-400 to-yellow-300 rounded-sm" />
              <Typography variant="h4" className="font-bold text-white">
                Our Story
              </Typography>
            </div>

            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Founded in 2025,MantraDATA Consultants was born out of a simple but ambitious idea: that the legal, arbitration, Dispute Resolution and ESG Compliance excellence shouldn't be slowed down by outdated systems or fragmented tools.
              </p>
              <p>
                Our founder, Rama Saravana, envisioned a consultancy services, where innovation meets practicality - where clients could adopt trendy, cutting-edge AI technologies like Knovos with local context and expert support.
              </p>
              <p>
                Today, we help organizations embrace digital transformation with confidence, adapt systems that are resilient, efficient, and purpose-built for real-world legal, arbitration and compliance challenges.
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

          {/* Team Section */}
          <div className="text-center space-y-6 " id="team">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,140,0,0.4)]">
              Meet the Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Legal tech isn’t just about software — it’s about people. Our leadership team blends decades of expertise in legal process, compliance, and technology adoption.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 items-stretch">
            {teamData.map(({ img, name, position, socials, tagline, description }) => (
              <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  tagline={tagline}
                  description={description}
                  socials={
                  <div className="flex items-center gap-2">
                      {socials.map(({ color, name: iconName, url }) => (
                      <a
                          key={iconName}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                      >
                          <IconButton
                          color={color}
                          variant="text"
                          className="transition-all duration-300 group-hover:text-blue-500 group-hover:shadow-[0_0_15px_#0A66C2]"
                          >
                          <i className={`fa-brands text-xl fa-${iconName}`} />
                          </IconButton>
                      </a>
                      ))}
                  </div>
                  }
              />
              ))}
          </div>
        </div>

        <hr className="border-gray-800" />
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
