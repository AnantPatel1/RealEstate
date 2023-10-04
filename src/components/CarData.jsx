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
          {car.image_urls.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <div
                style={{
                  height: "300px",
                  width: "370px",
                }}
              >
                <img
                  src={image}
                  className="card-img-top rounded-4"
                  alt={carNameAndYear}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="card-body">
          <p className="mt-2   fs-4">{car.location}</p>
          <p className="mt-2   fs-4">{car.complete_address}</p>
          <div className="d-flex flex-row  justify-content-between m-4">
            <div className="p-2">
              <p>
                <FaUsers className="text-primary" />{" "}
              </p>
              <p> {car.number_of_rooms}</p>
            </div>
            <div className="p-2">
              <p>
                <FaUsers className="text-primary" />{" "}
              </p>
              <p> {car.number_of_bedrooms}</p>
            </div>
            <div className="p-2">
              <p>
                <FaUsers className="text-primary" />{" "}
              </p>
              <p> {car.number_of_baths}</p>
            </div>
            <div className="p-2">
              <p>
                <FaUsers className="text-primary" />{" "}
              </p>
              <p> {car.number_of_staff}</p>
            </div>
          </div>

          <hr className="my-4" />
          <div className=" d-flex justify-content-between">
            <p className="mt-2  fw-bold fs-4">
              {car.price}
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
