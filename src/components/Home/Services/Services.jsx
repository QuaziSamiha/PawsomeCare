// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import services from "../../../../public/services.json";
// import s1 from "../../../images/pet-shop.jpg";
// import s2 from "../../../images/day-care.jpg";
// import s3 from "../../../images/pet-vet.jpg";
// import s4 from "../../../images/training-service.jpg";
// import s5 from "../../../images/stray-pet.jpg";
function Services() {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("../../../../public/services.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setServices(data);
  //     });
  // }, []);
  // console.log(services.title);

  // const images = [s1, s3, s2, s5, s4];
  return (
    <>
      <div
        id="services"
        className="text-center border-y border-[#fff5ed] my-12 py-12 "
      >
        <h1 className="my-2 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Services We Offer
        </h1>
        <h3 className="text-[#f5a887] mb-4 md:mb-8">
          Explore a world of care and pamperingh
        </h3>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {services.map((service) => (
            <>
              <ServiceCard key={service.id} service={service} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
