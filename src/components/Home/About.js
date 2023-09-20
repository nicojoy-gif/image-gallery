import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-cyan-900 h-screen">
      <Navbar />
      <section className="lg:w-1/2 w-full px-5 lg:mx-auto">
        <div className="text-white text-start flex flex-col justify-center my-4 mx-auto">
          <h1 className="text-4xl font-bold pb-2">
            Welcome to Our Innovative Image Gallery Platform
          </h1>
          <p className="text-lg font-medium pb-2">
            Discover the power of seamless drag-and-drop organization and
            authentication in one elegant solution.
          </p>
          <p className="text-lg font-medium pb-2">
            Our project empowers you to create stunning visual experiences with
            ease, whether you're a professional photographer, a design
            enthusiast, or simply someone who appreciates the beauty of images.
          </p>
          <p className="text-lg font-medium pb-2">
            With our drag-and-drop image gallery, you can effortlessly arrange
            your images just the way you envision, creating a captivating visual
            narrative. We've incorporated robust authentication features to
            ensure the privacy and security of your cherished collections.
          </p>
          <p className="text-lg font-medium pb-2">
            Join us on a journey where creativity knows no bounds. Explore the
            endless possibilities of image organization, collaboration, and
            inspiration. Embrace the artistry of your image gallery and let your
            creativity flourish.
          </p>
          <p className="text-lg font-medium pb-5">
            Unlock a world of visual storytelling today. Welcome to the future
            of image management and sharing.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
