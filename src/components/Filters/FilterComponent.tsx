import { useEffect, useState } from "react";
import BikeCard from "./BikeCard";
import SingleListItem from "./SingleListItem";

export type BikeType = {
  name: string;
  price: number;
  gender: string | number;
  brand: string;
  image: number | string;
};

const FilterComponent = () => {
  const [filterLi, setFilterLi] = useState<Array<BikeType>>();
  const [originalLi, setOriginalLi] = useState<Array<BikeType>>();
  const [active, setActive] = useState<string>("ShowAll");
  let genderObj: { [x: string]: number } | undefined;
  let brandObj: { [x: string]: number } | undefined;

  // useEffect fetch

  useEffect(() => {
    if (!originalLi) {
      fetch("https://challenges.brainster.tech/ajax_data/data.json")
        .then((data) => data.json())
        .then((data) => {
          setOriginalLi(data.products);
        });
    }
  }, []);

  // filter

  const filterFunction = (title: string) => {
    let filteredData = originalLi?.filter((item) =>
      title === "ShowAll"
        ? true
        : item.brand === title || item.gender.toString() === title
    );
    setFilterLi(filteredData);
    setActive(title);
  };

  // gender and brand object

  genderObj = originalLi
    ?.filter((item) => item.gender)
    .reduce(function (
      obj: { [x: string]: number },
      item: { gender: string | number }
    ) {
      if (!obj[item.gender]) {
        obj[item.gender] = 0;
      }
      obj[item.gender]++;

      return obj;
    },
    {});

  brandObj = originalLi
    ?.filter((item) => item.brand)
    .reduce(function (
      obj: { [x: string]: number },
      item: { brand: string | number }
    ) {
      if (!obj[item.brand]) {
        obj[item.brand] = 0;
      }
      obj[item.brand]++;

      return obj;
    },
    {});

  return (
    <div className="row bg-color">
      {originalLi && (
        <div className="col-10 offset-1 bg-white pt-5">
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col-11">
                  <ul className="list-group">
                    <h2 className="filter-title h4 fw-bold mb-4">Filter by:</h2>
                    <SingleListItem
                      handleFiltering={() => filterFunction("ShowAll")}
                      title="ShowAll"
                      key="ShowAll"
                      value={originalLi.length}
                      active={active === "ShowAll" ? "active" : ""}
                      activeBG={active === "ShowAll" ? "active-bg" : ""}
                    />
                  </ul>
                  <hr />
                  <h2 className="gender-title h5 fw-bold mb-4">Gender</h2>
                  <ul className="list-group">
                    {genderObj &&
                      Object.entries(genderObj).map((item) => {
                        return (
                          <SingleListItem
                            handleFiltering={() => filterFunction(item[0])}
                            key={item[0]}
                            title={item[0]}
                            value={item[1]}
                            active={active === item[0] ? "active" : ""}
                            activeBG={active === item[0] ? "active-bg" : ""}
                          />
                        );
                      })}
                  </ul>
                  <hr />
                  <ul className="list-group">
                    <h2 className="h5 fw-bold mb-4">Brand</h2>
                    {brandObj &&
                      Object.entries(brandObj).map((item) => {
                        return (
                          <SingleListItem
                            handleFiltering={() => filterFunction(item[0])}
                            key={item[0]}
                            title={item[0]}
                            value={item[1]}
                            active={active === item[0] ? "active" : ""}
                            activeBG={active === item[0] ? "active-bg" : ""}
                          />
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              {!filterLi ? (
                <BikeCard data={originalLi} />
              ) : (
                <BikeCard data={filterLi} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
