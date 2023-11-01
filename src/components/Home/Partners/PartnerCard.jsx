function PartnerCard({ partner }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded shadow-md w-48 h-32 text-center">
          <div className="p-1">
            <h1 className="font-bold text-blue-900 py-2">
              {partner.partnerName}
            </h1>
          </div>
          <div className="flex justify-center">
            <img src={partner.logoImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerCard;
