import Footer from "../shared/Footer";
import About from "./About";
import CareTips from "./CareTips";
import Header from "./Header";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <div>
        {/* <h1>this is home</h1> */}
        <Header />
        <About />
        <CareTips />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;
