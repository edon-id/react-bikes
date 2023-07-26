import { BikeType } from "./FilterComponent";
export type DataArray = {
  data: BikeType[];
};

const BikeCard = ({ data }: DataArray) => {
  return (
    <div className="row items-container">
      {data.map((item, index) => (
        <div
          key={item.price + index}
          className="col-4 mb-4 d-flex align-items-stretch"
        >
          <div className="card">
            <div className="image-size">
              <img
                className="image"
                src={require(`../../images/${item.image}.png`)}
                alt="..."
              />
            </div>
            <div className="card-body active-bg">
              <p className="h5 fw-bold">{item.name}</p>
              <p className="card-text">{item.price} $</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeCard;
