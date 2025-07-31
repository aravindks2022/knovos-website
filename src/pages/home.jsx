import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-custom-1.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Data Management, Redef<span className="text-red-500">AI</span>ned
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Your bridge to Legal Tech Excellence — In Collaboration with Knovos, a pioneer in global AI based Legal and ESG solutions
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-10 pt-4">
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
            <div className="mx-auto -mt-8 w-full md:w-8/12">
            <div className="items-center justify-center text-center">
              <div id="whatwedo" className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <BriefcaseIcon className="h-8 w-8 text-white mx-auto" />
              </div>
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold text-center"
                color="blue-gray"
              >
                What We Do
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                At MantraDATA Consulting, we empower law firms, corporate legal departments, 
                and ESG-driven organizations to streamline their operations through advanced legal and ESG technology solutions. 
                As a trusted implementation and sales partner of Knovos, a global leader in legal tech, we help clients adopt cutting-edge platforms for eDiscovery, 
                contract lifecycle management, compliance, collaboration, and litigation support.
                <br />
                <br />
                We specialize in bridging the gap between legal expertise and technology by offering tailored digital solutions that improve efficiency, 
                ensure regulatory alignment, and unlock strategic value. Whether it's automating workflows, managing  data securely ,  
                collaborative work process, or supporting ESG compliance, we enable legal and compliance teams to perform more—with confidence and clarity.
              </Typography>
            </div>
            {/* <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Placeholder</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Placeholder
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Example description text for the card. This is a placeholder for the actual content.
                  </Typography>
                </CardBody>
              </Card>
            </div> */}
          </div>
        </div>
      </section>
      <hr className="border-gray-300 mx-12" />
      <section id="team" className="px-4 pt-20 pb-24">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are the team members">
            Meet the people that make it all happen.
          </PageTitle>
          <div className="mt-24 flex flex-wrap justify-center gap-12">
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
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                  
                }
              />
            ))}
          </div>
        </div>
      </section>
      <hr className="border-gray-300 mx-12" />
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Solutions" heading="The Knovos Suite">
            Our partnership with Knovos gives us access to a suite of powerful tools designed to streamline legal and compliance processes.
          </PageTitle>
          <div className="mx-auto mt-20 mb-24 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form> */}
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
