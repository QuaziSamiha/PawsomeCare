import s1 from "../../../images/pet-shop.jpg";
import s2 from "../../../images/day-care.jpg";
import s3 from "../../../images/pet-vet.jpg";
import s4 from "../../../images/training-service.jpg";
import s5 from "../../../images/stray-pet.jpg";
function ServiceCard({ service }) {
  // console.log(service.image);
  const images = [s1, s3, s2, s5, s4];
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          data-aos="fade-up" // Specify the AOS animation here
          data-aos-duration="3000" // Animation duration in milliseconds
          className="my-8 mx-4 w-80 shadow-lg shadow-[#fff5ed]-500/50 bg-[#fff5ed] border border-[#ffc8b0] rounded-md"
        >
          <div className=" p-2">
            <h1 className="text-blue-900 text-lg font-semibold animate-pulse">
              {service.title}
            </h1>
            <div className="flex items-center justify-center my-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="w-72 h-72 rounded-md"
                  src={img}
                  alt=""
                />
              ))}
            </div>
            <p className="text-justify text-base text-blue-800 mx-3 ">
              {service.description}
            </p>
            <div>
              <button className="bg-[#ffcc9d] text-blue-900 font-semibold px-6 py-2 my-2 w-full rounded hover:animate-pulse">
                Get Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
