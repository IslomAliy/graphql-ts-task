type InfoCardTypes = {
  emoji: string;
  name: string;
  code: string;
  capital: string;
  currency: string;
  native: string;
  phone: string;
};

const InfoCard = ({
  emoji,
  name,
  code,
  capital,
  currency,
  native,
  phone,
}: InfoCardTypes) => {
  return (
    <div className="country-card-wrapper">
      <div className="country-flag "> {emoji}</div>
      <div className="info-section">
        <h3 className="country-name">{name}</h3>
        <h3 className="info-text">
          Phone: <span>{phone}</span>
        </h3>
        <h3 className="info-text">
          Code: <span> {code}</span>
        </h3>
        <h3 className="info-text">
          Capital: <span>{capital}</span>
        </h3>
        <h3 className="info-text">
          Currency: <span>{currency}</span>
        </h3>
        <h3 className="info-text">
          Native: <span>{native}</span>
        </h3>
      </div>
    </div>
  );
};

export default InfoCard;
