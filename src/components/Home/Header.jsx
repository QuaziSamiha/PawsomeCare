import Image from "../../images/pet-owner-header.png";
function Header() {
  const borderStyle = {
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
  };
  return (
    <>
      <div className="h-screen mb-24 px-16 pt-8 pb-24 bg-[#fff5ed] ">
        <div className="sm:flex justify-around pt-36">
          <div className="my-16">
            <h1>Furry Friends Paradise</h1>
            <h1>Furry Friend&apos; Home Away from Home</h1>
            <p>
              <small>Building Happy Memories with Your Furry Friends</small>
            </p>
            <button>Donate Now</button>
          </div>
          <div style={borderStyle} className="bg-[#ffc8b0] md:w-96 md:h-96 ">
            <img className="" src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
