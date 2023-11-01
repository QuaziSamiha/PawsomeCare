import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../../../public/services.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  // console.log(services.title);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="services"
        className="text-center border-y border-[#fff5ed] my-12 py-12"
      >
        <h1 className="my-2 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Services We Offer
        </h1>
        <h3 className="text-[#f5a887] mb-4 md:mb-8">
          Explore a world of care and pamperingh
        </h3>
        <Slider {...settings}>
          {services.map((service) => (
            <>
              <ServiceCard key={service.id} service={service} />
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Services;
