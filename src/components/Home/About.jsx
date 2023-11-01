import aboutImage from "../../images/about.jpg";
function About() {
  return (
    <>
      <div
        id="about"
        className="text-center border-y border-[#fff5ed] my-12 py-12"
      >
        <h1 className="my-2 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Our Story
        </h1>
        <h2 className="text-[#f5a887] mb-4 md:mb-8">
          The Heart Behind Our Pet Care
        </h2>
        <div className="md:grid grid-cols-2 gap-5">
          <div className="flex justify-center items-center">
            <div
              data-aos-duration="3000" // Animation duration in milliseconds
              data-aos="flip-up"
              className="py-3 px-8 w-96 text-justify text-base text-blue-500 font-Pachano"
            >
              <p>
                In a small corner of our city, our story began with a group of
                animal enthusiasts united by a common goal: to create a haven
                for pets and their devoted owners. Starting as a modest pet
                shop, we soon realized our mission extended far beyond the
                aisles. Our unwavering commitment led us to expand into pet
                training, daycare, and boarding services, nurturing deep bonds
                between pets and their humans.
              </p>
              <p>
                Our love for animals ignited a passion for rescue, saving and
                rehabilitating those in need. Today, we&apos;re more than a pet
                care business; we&apos;re a compassionate community dedicated to
                the well-being of our four-legged friends. Join us in this
                beautiful story of care, compassion, and companionship, where
                every pet is family, and love knows no bounds.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              data-aos-duration="3000" // Animation duration in milliseconds
              data-aos="flip-up"
              className="shadow-lg"
            >
              <img className="w-96 h-96 rounded " src={aboutImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
