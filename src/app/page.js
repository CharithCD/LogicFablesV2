import { ModeToggle } from "@/components/mode-toggle";
import ProjectCard from "@/components/project-card";
import ServiceCard from "@/components/service-card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    < >
      {/* Hero Section */}
      <section id="hero">
        <div
          className="container p-8 -mt-8 mx-auto flex flex-col-reverse items-center md:flex-row md:max-w-2xl md:p-6 lg:max-w-7xl">

          {/* <!-- Left Item --> */}
          <div className="flex flex-col mb-12 space-y-9 lg:w-1/2">
            <h1
              className="max-w-lg leading-[48px] text-3xl font-semibold text-center md:leading-[55px] md:text-3xl md:text-left lg:leading-[65px] lg:text-5xl">
              Transforming Fables to Digital Reality:
              <span className="text-primary font-bold">Logic Fables</span>
            </h1>
            <p className="hidden max-w-lg text-center md:block md:text-left ">
              Whether you&#39;re a small business owner or an individual with big ideas, we&#39;re here to help you succeed in the
              digital world. From stunning websites to custom web systems, our team is committed to delivering results that
              exceed your expectations.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href="#contact"
                className="p-3 px-5 text-[15px] text-white bg-primary font-semibold rounded-full shadow-lg md:p-4 md:text-[18px] md:px-6 hover:bg-primaryDark">
                Get Started Today
              </Link>
            </div>
          </div>
          <div className="flex align-middle md:w-3/5 lg:w-1/2">
            <Image src="/img/hero-image.png" width={600} height={600} className="max-h-[800px]" alt="hero-image" />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <div id="services"
        className="-mt-12 relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        {/*Service tag-line*/}
        <div className="relative mx-auto text-center md:-mt-5 md:mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">Discover Our Services <span className="text-primary">@Logic
            Fables</span></h2>
        </div>

        {/* card list */}
        <div className="mt-10 relative grid gap-16 sm:grid-cols-1 md:mt-0 lg:grid-cols-3">
          {/* card 1 */}
          <ServiceCard
            iconSrc="/img/flash.png"
            iconAlt="Settings Icon"
            title="WordPress Development"
            description="Leverage the flexibility and scalability of WordPress for your website needs. Whether it's a blog, business website, or e-commerce store, our WordPress development services ensure a customizable and user-friendly solution tailored to your requirements."
            additionalClasses="hover:shadow-primaryDark"
          />

          {/* Card 2 */}
          <ServiceCard
            iconSrc="/img/flash.png"
            iconAlt="Settings Icon"
            title="Custom Web Development"
            description="At Logic Fables, we specialize in crafting custom web solutions that perfectly align with your vision and goals. From sleek and responsive websites to complex web applications, our team leverages the latest technologies and industry best practices to bring your ideas to life online."
            additionalClasses="hover:shadow-primaryDark"
          />

          {/* Card 3 */}
          <ServiceCard
            iconSrc="/img/flash.png"
            iconAlt="Settings Icon"
            title="Website Optimization"
            description="Improve the performance and user experience of your website with our optimization services. From speed enhancements to SEO improvements, we'll help you maximize your online visibility and drive more traffic to your site."
            additionalClasses="hover:shadow-primaryDark"
          />
        </div>

      </div>

      {/* CTA Section */}
      <section id="cta" className="bg-primary">
        {/* Flex Container */}
        <div
          className="container max-w-7xl flex flex-col items-center justify-between px-6 py-12 mx-auto space-y-8 md:py-8 md:flex-row md:space-y-0">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl md:max-w-xl md:text-left">
            Bringing Your Fables to Life
          </h2>
          {/* Button */}
          <div>
            <a href="#contact"
              className="p-3 px-5  text-primary text-[15px] bg-white font-semibold rounded-full shadow-lg hover:bg-accent hover:text-white md:p-4 md:text-[18px] md:px-6">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Products / Project / Portfolio Section */}
      <div id="portfolio" className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36">

        {/* Product tag-line */}
        <div className="relative mx-auto text-center md:-mt-5 md:mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">Browse Our Portfolio <span className="text-primary">@Logic
            Fables</span></h2>
        </div>

        {/* Card list */}
        <div className="mt-10 mx-auto grid gap-16 grid-cols-1 md:mt-0 lg:grid-cols-3">

          {/* Card 1 */}
          <ProjectCard
            imageSrc="/img/uni.jpg"
            altText="university web design"
            title="Eduford"
            description="Modern university website design for seamless navigation and engaging user experience."
            link="https://dumuni.netlify.app"
          />

          <ProjectCard
            imageSrc="/img/ecom.jpg"
            altText="e-commerce web design"
            title="Red Store"
            description="Sleek e-commerce design for effortless browsing and streamlined checkout."
            link="https://boringwebapp.netlify.app/"
          />
          <ProjectCard
            imageSrc="/img/ads.png"
            altText="ads agency web design"
            title="XYPO"
            description="Creative designs tailored for advertising agencies, blending strategy and impact."
            link="https://xypo-ads.netlify.app"
          />
        </div>
      </div >

      {/* Contact Section */}
      < section id="contact" className="" >
        <div className="px-10 py-16 w-full md:px-36 lg:px-24 lg:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-x-32">
            <div className="px-0  md:px-2">
              <p className="text-2xl font-bold  md:text-4xl">
                Get in touch
              </p>
              <p className="mt-4 text-lg">
                Our friendly team would love to hear from you.
              </p>
              <form action="https://api.web3forms.com/submit" method="post" className="mt-8 space-y-4">
                <input type="hidden" name="access_key" value="7fd0f229-3b19-47b2-b982-c2c84d69caf9" />
                <div className="grid w-full  items-center gap-1.5">
                  <label className="leading-none " htmlFor="name">
                    Name
                  </label>
                  <input
                    className="flex h-[42px] w-full rounded-md border border-primary bg-transparent px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primaryDark focus:ring-offset-1"
                    type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label className="leading-none" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="flex h-[42px] w-full rounded-md border border-primary bg-transparent px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primaryDark focus:ring-offset-1"
                    type="email" id="email" name="email" placeholder="Email" required />
                </div>

                <div className="grid w-full  items-center gap-1.5">
                  <label className="leading-none " htmlFor="message"> Message
                  </label>
                  <textarea
                    className="flex w-full rounded-md border border-primary bg-transparent px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primaryDark focus:ring-offset-1 "
                    id="message" name="message" placeholder="Leave us a message" rows="4" required></textarea>
                </div>
                <button type="submit"
                  className="w-full h-[42px] rounded-md bg-primary px-3 py-2 font-semibold text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Send Message
                </button>
              </form>
            </div>
            <Image alt="Contact us" className="hidden max-h-[30rem] w-full rounded-lg object-cover lg:block"
              src="/img/contact.svg" width={800} height={480} />
          </div>
        </div>
      </section >
    </>
  );
}
