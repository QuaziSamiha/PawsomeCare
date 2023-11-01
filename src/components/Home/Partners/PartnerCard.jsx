function PartnerCard({ partner }) {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1>{partner.partnerName}</h1>
        </div>
        <div>
          <img src={partner.logoImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default PartnerCard;
