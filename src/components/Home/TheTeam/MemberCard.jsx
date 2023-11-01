// import i1 from "../../../images/members/male1.jpg";
// import i2 from "../../../images/members/male2.jpg";
// import i3 from "../../../images/members/male3.jpg";
// import i4 from "../../../images/members/male4.jpg";
// import i5 from "../../../images/members/male5.jpg";
// import i6 from "../../../images/members/female1.jpg";
// import i7 from "../../../images/members/female2.jpg";
// import i8 from "../../../images/members/female3.jpg";
function MemberCard({ member }) {
  const { name, image, service } = member;
  // const images = [i1, i2, i3, i4, i5, i6, i7, i8];
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
