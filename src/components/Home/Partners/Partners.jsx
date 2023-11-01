import PartnerCard from "./PartnerCard";

function Partners() {
  const partners = [
    {
      id: 1,
      partnerName: "Petco",
      logoImage: "petco-logo.png",
    },
    {
      id: 2,
      partnerName: "Hill's Science Diet",
      logoImage: "hills-logo.png",
    },
    {
      id: 3,
      partnerName: "Royal Canin",
      logoImage: "royal-canin-logo.png",
    },
    {
      id: 4,
      partnerName: "Bayer Animal Health",
      logoImage: "bayer-logo.png",
    },
    {
      id: 5,
      partnerName: "Purina",
      logoImage: "purina-logo.png",
    },
    {
      id: 6,
      partnerName: "Pedigree",
      logoImage: "pedigree-logo.png",
    },
  ];

  return (
    <>
      <div
        id="partners"
        className="text-center border-y border-[#fff5ed] my-10 py-12"
      >
        <h1 className="mb-4 text-blue-900 text-xl md:text-3xl font-semibold md:font-bold">
          Out Partners and Affliation
        </h1>
        <h3 className="text-[#f5a887] mb-4 md:mb-8"></h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Partners;
