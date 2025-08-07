import React, { useState } from "react";
import { Footer } from "@/widgets/layout";
import { solutions } from "../data/solutions-data";
import { SolutionCard, SolutionModal } from "@/widgets/cards";

export function Solutions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/img/background-custom-2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[400px] flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-20 mb-10">
              Our Solutions
            </h1>
            <p className="text-white text-lg max-w-4xl mx-auto">
              As an implementation partner for Knovos in Singapore and Southeast Asia, MantraDATA offers localized expertise for a powerful suite of legal tech solutions.
              Click on each solution to learn more.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <section className="px-4 pb-20 pt-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {solutions.map((solution) => (
                <SolutionCard
                  key={solution.id}
                  icon={solution.icon}
                  name={solution.name}
                  onClick={() => handleOpen(solution)}
                />
              ))}
            </div>

            {/* Modal */}
            <SolutionModal
              open={modalOpen}
              onClose={handleClose}
              icon={modalData?.icon}
              name={modalData?.name}
              prodext={modalData?.prodext}
              tagline={modalData?.tagline}
              description={modalData?.description}
              mantraValue={modalData?.mantraValue}
            />
          </div>
        </section>

        <hr className="border-gray-800" />
        <Footer />
      </div>
    </section>
  );
}

export default Solutions;
