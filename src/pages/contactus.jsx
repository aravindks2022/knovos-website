import { Footer } from "@/widgets/layout";
import {
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function ContactUs() {
  return (
    <>
      <section
        className="relative bg-top bg-repeat text-white"
        style={{
          backgroundImage: "url('/img/background-custom-2.png')",
          backgroundSize: "auto",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Content above overlay */}
        <div className="relative z-10 flex w-full justify-center items-center px-4 py-20">
          <div className="w-full max-w-4xl flex flex-col items-center mt-20">
            <div className="text-center">
              <Typography
                variant="h1"
                className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 bg-clip-text text-transparent mb-8"
              >
                Get in Touch
              </Typography>
              <Typography className="text-lg font-normal text-gray-300">
                We'd love to hear from you. Please fill out the form below.
              </Typography>
            </div>

            <form className="mt-8 mb-2 w-full">
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-300">Your Name</label>
                  <Input
                    size="lg"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-300">Email Address</label>
                  <Input
                    size="lg"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Phone Number */}
                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <label className="mb-1 text-gray-300">Phone Number</label>
                  <Input
                    size="lg"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Message */}
                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <label className="mb-1 text-gray-300">Message</label>
                  <Textarea
                    rows={5}
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  className="mt-6 w-full md:w-1/3 bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                  fullWidth
                >
                  Send Message
                </Button>
              </div>
            </form>

            {/* Alternative Contact Section */}
            <div className="mt-16 w-full text-center border-t border-gray-700 pt-10">
              <Typography
                variant="h5"
                className="font-semibold text-white mb-4"
              >
                Alternatively, reach us at:
              </Typography>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-6 h-6" />
                  <a
                    href="mailto:Rama.Saravana@mantradataconsultants.com"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Rama.Saravana@mantradataconsultants.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-6 h-6" />
                  <a
                    href="tel:+6591891365"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    +65 9189 1365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700" />
      <div className="bg-black text-white">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
