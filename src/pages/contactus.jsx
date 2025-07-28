import { Footer } from "@/widgets/layout";
import {
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export function ContactUs() {
  return (
    <>
    <section className="flex w-full justify-center items-center mt-12">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Get in Touch
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            We'd love to hear from you. Please fill out the form below.
          </Typography>
        </div>

        <form className="mt-8 mb-2 w-full px-4 md:px-8">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <Input
              size="lg"
              label="Your Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            />

            {/* Email */}
            <Input
              size="lg"
              label="Email Address"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            />

            {/* Phone Number (full width on md+) */}
            <div className="col-span-1 md:col-span-2">
              <Input
                size="lg"
                label="Phone Number"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            {/* Message (full width) */}
            <div className="col-span-1 md:col-span-2">
              <Textarea
                rows={5}
                label="Message"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button className="mt-6 w-full md:w-1/3" fullWidth>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
    <div className="bg-white mt-12">
            <Footer />
          </div>
    </>
  );
}

export default ContactUs;
