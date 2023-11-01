import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./TestimonialForm";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const url = "../../../../public/testmonials.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTestimonials(data);
      });
  }, []);
  // console.log(testimonials);
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="testimonials"
        className="text-center border-y border-[#fff5ed] my-10 py-12"
      >
        <h1 className="mb-4 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Happy Clients
        </h1>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 items-center">
          <div className="col-span-2">
            <h3 className="text-[#f5a887] pl-6 mb-4 md:mb-8 text-start">
              What Our Customers Say....
            </h3>
            <Slider {...settings}>
              {testimonials.map((review) => (
                <>
                  <TestimonialCard key={review.id} review={review} />
                </>
              ))}
            </Slider>
          </div>
          <div className="mb-6 lg:mb-0 md:mt-4">
            <h1 className="text-[#f5a887] pl-6 mb-4 md:mb-8 text-start">
              Our client? Leave a Comment...
            </h1>
            <TestimonialForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
