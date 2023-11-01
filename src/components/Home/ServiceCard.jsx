function ServiceCard({ service }) {
  return (
    <>
      <div className="my-12 mx-4">
        <div className="bg-[#fff5ed] border border-[#ffc8b0] rounded-md p-6">
          {/* <img src={service.image} alt="" /> */}
          <h1 className="text-blue-900">{service.title}</h1>
          <p className="text-justify">{service.description}</p>
          <button className="bg-[#ffcc9d] text-blue-900 px-2">
            Get Service
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
