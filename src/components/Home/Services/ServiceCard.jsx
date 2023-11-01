function ServiceCard({ service }) {
  console.log(service.image);
  return (
    <>
      <div className="my-8 mx-4 w-80 shadow-lg shadow-[#fff5ed]-500/50 bg-[#fff5ed] border border-[#ffc8b0] rounded-md">
        <div className=" p-2">
          <h1 className="text-blue-900 text-lg font-semibold animate-pulse">
            {service.title}
          </h1>
          <div className="flex items-center justify-center my-2">
            <img className="w-72 h-72 rounded-md" src={service.image} alt="" />
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
    </>
  );
}

export default ServiceCard;
