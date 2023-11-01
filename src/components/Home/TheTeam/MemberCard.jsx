function MemberCard({ member }) {
  const { name, image, service } = member;
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          data-aos="fade-up-right"
          data-aos-duration="1000" // Animation duration in milliseconds
          className="border border-blue-600 rounded w-56 my-2 h-60"
        >
          <div className="flex justify-center mt-2">
            <img className="w-32 h-32 rounded" src={image} alt="" />
          </div>
          <div className="text-blue-900 mx-2 my-2 text-center">
            <h1 className="font-medium">{name}</h1>
            <p className="font-semibold">Dept: {service}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberCard;
