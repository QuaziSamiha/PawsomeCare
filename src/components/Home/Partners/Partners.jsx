import { useEffect, useState } from "react";
import PartnerCard from "./PartnerCard";

function Partners() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("../../../../public/partners.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPartners(data);
      });
  }, []);
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
