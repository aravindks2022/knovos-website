import React from "react";
import { Footer } from "@/widgets/layout";
import { steps } from "@/data/end-to-end";

const EndToEndSupport = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/img/background-custom-2.png')" }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* All content above the overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[420px] flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-20 mb-10">
              End-To-End Support
            </h1>
            <p className="text-white text-lg max-w-3xl mx-auto">
              At MantraDATA Consulting, we go beyond just selling technology — we become your transformation partner.
              Our end-to-end support model ensures your journey to digital legal and compliance operations is smooth,
              strategic, and successful.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="px-4 pb-20 mt-5">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map(({ title, icon: Icon, description }, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-800 p-6 
                           bg-gradient-to-br from-black/80 via-gray-900 to-black/70 
                           hover:shadow-[0_0_25px_#f87171aa] transition-all duration-300
                           flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Icon container with gradient ring */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-orange-400 to-yellow-300 rounded-full shadow-lg shadow-red-500/30" />
                    <div className="absolute inset-[4px] bg-black rounded-full z-10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {index + 1}. {title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className="max-w-3xl mx-auto text-center mt-20">
            <p className="text-lg text-gray-300 font-medium italic">
              With MantraDATA’s end-to-end support, you don’t just adopt technology;
              <br className="hidden md:inline" /> you unlock its full potential.
            </p>
          </div>
        </div>

        <hr className="border-gray-700" />
        <Footer />
      </div>
    </section>
  );
};

export default EndToEndSupport;
export { EndToEndSupport };
