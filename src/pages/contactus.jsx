import { useState } from "react";
import { Footer } from "@/widgets/layout";
import {
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import SEO from "@/widgets/layout/SEO";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company_name: "", // honeypot
    privacyPolicy: false, // new state for privacy policy checkbox
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      privacyPolicy: e.target.checked, // toggle the checkbox value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If honeypot is filled, assume it's a bot
    if (formData.company_name) return;

    // Validation of fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Validate phone number should only have digits910738
    const phonePattern = /^\d+$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Check if the privacy policy checkbox is not checked
    if (!formData.privacyPolicy) {
      toast.error("You must agree to the privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xdkdpkqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company_name: "",
          privacyPolicy: false, // Reset the checkbox after submission
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEO title="Contact Us | Case Management Software Singapore | ESG Compliance Solutions Singapore | MANTRADATA Legal Tech | Arbitration Technologies | e-Discovery Solutions" 
          description="Helping law firms and corporates with legal tech consulting, ESG compliance, arbitration technology, AI-powered eDiscovery, AI in legal, AI for legal works, AI in paralegal, AI smarter solutions, legal customers privacy, legal documentation management, DSAR management" />
      <Toaster position="top-center" reverseOrder={false} />

      <section
        className="relative bg-top bg-repeat text-white"
        style={{
          backgroundImage: "url('/img/background-custom-2.png')",
          backgroundSize: "auto",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />

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

            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from Website"
              />

              {/* Honeypot (anti-spam) */}
              <div style={{ display: "none" }}>
                <label>
                  Company Name:
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-300">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    size="lg"
                    required
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-gray-300">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    size="lg"
                    required
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <label className="mb-1 text-gray-300">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    size="lg"
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col">
                  <label className="mb-1 text-gray-300">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleCheckboxChange}
                  id="privacyPolicy"
                  required
                  className="mr-2 mt-2"
                />
                <label htmlFor="privacyPolicy" className="text-gray-300">
                  By submitting this form, you consent to the collection and use of your personal data for contact purposes only. We respect your privacy and are committed to protecting your personal information. Any data you provide on this site will be used solely to respond to your inquiries or deliver our services, and will not be shared with third parties without your consent, unless required by law.
                </label>
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={loading}
                  className={`mt-6 w-full md:w-1/3 bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  fullWidth
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>

            <div className="mt-16 w-full text-center border-t border-gray-700 pt-10">
              <Typography variant="h5" className="font-semibold text-white mb-4">
                Alternatively, reach us at:
              </Typography>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-6 h-6" />
                  <a
                    href="mailto:Rama.Saravana@mantradataconsultants.com"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Rama.Saravana@mantradataconsultants.com
                  </a>
                </div>
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
               <div className="mt-4 text-xs text-gray-500">
                By reaching out to us via email or phone, you consent to the collection and use of your personal data for contact purposes only. We respect your privacy and are committed to protecting your personal information. Any data you provide will be used solely to respond to your inquiries or deliver our services, and will not be shared with third parties without your consent, unless required by law.
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
