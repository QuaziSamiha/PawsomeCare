import { motion, useScroll, useSpring } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
          <motion.div className="progress-bar" style={{ scaleX }} />
          <div className="p-3 text-justify text-base text-blue-500 font-Pachano">
            <p>
              Once upon a time in a cozy little corner of the city, a small
              group of animal lovers came together with a shared dream: to
              create a haven for pets and their owners. With a handful of furry
              friends and a world of determination, our journey began. We
              started as a modest pet shop, offering high-quality supplies and
              essentials for our beloved companions. But we knew our mission
              extended beyond the shelves of our store. Our commitment to pets
              was unwavering. As the years passed, our love for animals led us
              to expand our horizons. We delved into pet training, eager to help
              pets and their owners communicate better, forming deeper bonds. We
              provided a temporary refuge for pets when their humans needed a
              hand, offering daycare and boarding services.
            </p>
            <p>
              {" "}
              Our team of skilled trainers and caregivers became like family to
              every pet that crossed our threshold. Yet, we couldn&apos;t ignore
              the strays and animals in need. We embarked on rescue missions,
              tending to the injured, giving shelter to the homeless, and
              nurturing them back to health. We believed that every life was
              worth saving. Today, we&apos;re more than just a pet care
              business. We&apos;re a community bound by compassion and driven by
              the well-being of our four-legged friends. Our journey is a
              testament to our unwavering love for animals, and we&apos;re
              honored to have you alongside us. Join us in making a difference,
              one paw at a time. Whether it&apos;s finding the perfect toy,
              enhancing your pet&apos;s training, or rescuing a furry soul in
              need, we&apos;re here to share our love and knowledge with you.
              Together, we&apos;ll continue to write this beautiful story of
              care, compassion, and companionship. Welcome to our world, where
              every pet is family, and love knows no bounds.
            </p>
          </div>
          <div className="bg-red-500"></div>
        </div>
      </div>
    </>
  );
}

export default About;
