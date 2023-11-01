const TestimonialCard = ({ review }) => {
  //   console.log(review);
  const { date, animalType, serviceType, customerReview, customerName } =
    review;
  //   console.log(date, animalType, serviceType, customerReview, customerName);
  return (
    <>
      <div>
        <div className="border border-[#e0a287] text-blue-700 rounded-md mx-6 my-4 px-6 py-3 h-72 text-start shadow-inner shadow-cyan-500/50">
          <p className="text-sm py-1">Date: {date}</p>
          <h1 className="text-base">
            Animal Type: <span className="text-blue-700">{animalType}</span>
          </h1>
          <h1 className="text-base py-1">Service Type: {serviceType}</h1>
          <p className="text-justify my-1 text-gray-500">
            <small>
              <span className="text-blue-900 text-lg font-bold">&ldquo;</span>
              {customerReview}
              <span className="text-blue-900 text-lg font-bold">&ldquo;</span>
            </small>
          </p>
          <p className="text-end font-Pachano text-blue-900 font-semibold text-lg">
            {customerName}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
