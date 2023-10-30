import Image from "../../images/pet-owner-header.png";
function Header() {
  const borderStyle = {
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
  };
  return (
    <>
      <div className="h-screen mb-24 p-8 lg:p-16 bg-[#fff5ed]">
        <div className="sm:flex justify-around">
          <div className="my-16">
            <h1 className="text-[#f59d4a] text-xl lg:text-5xl font-extrabold my-4">
              Furry Friends <span className="text-[#f5a887]">Paradise</span>
            </h1>
            <h1 className="text-3xl font-bold mb-4 text-[#f59d4a]">
              Furry Friend&apos;s Home Away from Home
            </h1>
            <p className="text-[#f5a887] mb-6">
              Building Happy Memories with Your Furry Friends
            </p>
            <div className="relative w-2/3">
              <button className="bg-[#ffcc9d] px-8 py-3 my-4 rounded text-blue-900 text-xl hover:font-Pachano font-semibold relative z-10">
                Donate Now
              </button>
              <span className="absolute top-1 -left-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-900"></span>
                </span>
              </span>
            </div>
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
