import Footer from "../shared/Footer/Footer";
import About from "./About";
import CareTips from "./CareTips";
import Gallery from "./Gallery";
import Header from "./Header";
import Partners from "./Partners";
import Services from "./Services/Services";

import Testimonials from "./Testimonials/Testimonials";
import TheTeam from "./TheTeam/TheTeam";

function Home() {
  return (
    <>
      <div>
        {/* <h1>this is home</h1> */}
        <Header />
        <Services />
        <TheTeam />
        <About />
        <Partners />
        <CareTips />
        <Testimonials />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default Home;
