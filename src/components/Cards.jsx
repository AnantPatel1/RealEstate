import { useSelector } from "react-redux";
import CarData from "./CarData";
import { useParams } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Cars = () => {
  const card_data = useSelector((state) => state.data);
  var { pageNumber } = useParams();
  // console.log(card_data);

  if (!pageNumber) pageNumber = 1;
  // console.log(pageNumber);
  const itemsPerPage = 3;
  const startId = (pageNumber - 1) * itemsPerPage + 1;
  const endId = startId + itemsPerPage - 1;
  const filteredData = card_data.slice(startId - 1, endId);
  console.log(filteredData);

  return (
    <div>
      <div className=" container">
        <header style={{ width: "40%" }}>
          <h1>Featured Listed Properties</h1>
          <p>
            Real State can be bought,sold, leased or rented and can be valuable
            investment opportunity.The value of real State can be...
          </p>
        </header>
      </div>
      <section className=" container">
        <div
          className="d-flex flex-wrap justify-content-between m-4"
          style={{ width: "90%" }}
        >
          <div className="d-flex flex-row">
            {" "}
            <button
              type="button"
              className="btn btn-secondary  me-3 rounded-pill"
            >
              New York
            </button>{" "}
            <button
              type="button"
              className="btn btn-secondary  me-3 rounded-pill"
            >
              Parris
            </button>{" "}
            <button
              type="button"
              className="btn btn-primary  me-3 rounded-pill"
            >
              London
            </button>{" "}
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary me-3 rounded-pill"
            >
              View all <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
      <div className="container" style={{ width: "90%" }}>
        <div className="row p-1 m-1">
          {filteredData.map((car, index) => (
            <CarData key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
