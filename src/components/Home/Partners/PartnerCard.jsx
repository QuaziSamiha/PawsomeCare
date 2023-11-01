function PartnerCard({ partner }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded shadow-md text-center">
          <div>
            <h1>{partner.partnerName}</h1>
          </div>
          <div>
            <img src={partner.logoImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerCard;
