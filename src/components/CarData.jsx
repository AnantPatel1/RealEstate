/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";
import { FaUsers, FaGasPump, FaTachometerAlt, FaCar } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
export default function CarCard({ car }) {
  // Combine car name and year of manufacture with a space in between
  const carNameAndYear = `${car.car_name} ${car.year_of_manufacture}`;

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 p-4 ">
      <div
        className="card  rounded-4 border-3 border-white p-1 shadow-lg"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <Carousel interval={null}>
          {car.car_images.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <img
                src={image}
                className="card-img-top rounded-4"
                alt={carNameAndYear}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-body">
          <div className=" d-flex justify-content-between">
            <p className="mt-2  fw-bold fs-4">{car.car_name}</p>
            <p
              className="  rounded-3 text-center p-2"
              style={{
                border: "2px dotted #4687f0",
                borderStyle: "dashed solid",
              }}
            >
              {car.year_manufacture}
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="p-1" style={{ flex: "0 0 calc(50% - 15px)" }}>
              <p className="card-text">
                <FaUsers className="text-primary" /> {car.seaters}
              </p>
            </div>
            <div className="p-1" style={{ flex: "0 0 calc(50% - 15px)" }}>
              <p className="card-text">
                <FaGasPump className="text-primary" /> {car.fuel_type}
              </p>
            </div>
            <div className="p-1" style={{ flex: "0 0 calc(50% - 15px)" }}>
              <p className="card-text">
                <FaTachometerAlt className="text-primary" /> {car.mileage}
              </p>
            </div>
            <div className="p-1" style={{ flex: "0 0 calc(50% - 15px)" }}>
              <p className="card-text">
                <FaCar className="text-primary" /> {car.type}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className=" d-flex justify-content-between">
            <p className="mt-2  fw-bold fs-4">
              {car.car_price}
              <span style={{ fontWeight: 100 }}>/month</span>
            </p>
            <p
              style={{
                display: "flex",
              }}
            >
              <button type="button" className="btn  bg-info rounded-4 m-1">
                <BsHeart />
              </button>
              <button type="button" className="btn btn-primary rounded-4 m-1">
                Rent Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
