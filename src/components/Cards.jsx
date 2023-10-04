import { useSelector } from "react-redux";
import PropertyData from "./PropertyData";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fragment, useEffect, useState } from "react";
import { MdUnfoldMoreDouble } from "react-icons/md";

const Cars = () => {
  const card_data = useSelector((state) => state.data);
  const [count, setCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filteredData, setFilteredData] = useState([]);
  const [disable, setdisable] = useState(false);

  useEffect(() => {
    const dataToShow = card_data.slice(0, itemsPerPage);
    setFilteredData(dataToShow);
  }, [itemsPerPage, card_data]);

  const handleShowMore = () => {
    setCount(count + 1);
    setItemsPerPage(itemsPerPage + count * 3);
  };
  const showFullData = () => {
    setItemsPerPage(60);
    setdisable(true);
  };
  console.log(disable);
  return (
    <Fragment>
      <div className="container">
        <header style={{ width: "40%" }}>
          <h1>Featured Listed Properties</h1>
          <p>
            Real Estate can be bought, sold, leased, or rented and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </header>
      </div>
      <section className="container">
        <div
          className="d-flex flex-wrap justify-content-between m-4"
          style={{ width: "90%" }}
        >
          <div className="d-flex flex-row">
            <button
              type="button"
              className="btn btn-secondary me-3 rounded-pill"
            >
              New York
            </button>
            <button
              type="button"
              className="btn btn-secondary me-3 rounded-pill"
            >
              Paris
            </button>
            <button type="button" className="btn btn-primary me-3 rounded-pill">
              London
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary me-3 rounded-pill"
              onClick={showFullData}
            >
              View all <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
      <div className="container" style={{ width: "90%" }}>
        <div className="row p-1 m-1">
          {filteredData.map((item, index) => (
            <PropertyData key={index} property={item} />
          ))}
        </div>
      </div>
      <div className="container p-4">
        <button
          type="button"
          className="btn btn-primary p-2"
          onClick={handleShowMore}
          disabled={disable}
        >
          <MdUnfoldMoreDouble />
          Show More
        </button>
      </div>
    </Fragment>
  );
};

export default Cars;
