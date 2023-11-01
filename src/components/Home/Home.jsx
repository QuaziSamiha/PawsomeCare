import Footer from "../shared/Footer/Footer";
import About from "./About";
import CareTips from "./CareTips";
import Header from "./Header";
import Partners from "./Partners";
import Services from "./Services/Services";

import Testimonials from "./Testimonials/Testimonials";
import TheTeam from "./TheTeam";

function Home() {
  return (
    <>
      <div>
        {/* <h1>this is home</h1> */}
        <Header />
        <Services />
        <About />
        <TheTeam />
        <Partners />
        <CareTips />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;
