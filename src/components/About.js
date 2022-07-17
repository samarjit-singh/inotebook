import React from "react";
import banner1 from "../img/notebook1.jpg";
import banner2 from "../img/notebook2.jpg";
import banner3 from "../img/notebook3.jpg";
import "./styles.css";

const About = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner1}
              id="banner"
              className="d-block w-100"
              alt="banner 1"
            />
            <div className="carousel-caption">
              <h1 className="banner-text">iNotebook</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              id="banner"
              className="d-block w-100"
              alt="banner 2"
            />
            <div className="carousel-caption">
              <h1 className="banner-text">iNotebook</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={banner3}
              id="banner"
              className="d-block w-100"
              alt="banner 3"
            />
            <div className="carousel-caption">
              <h1 className="banner-text">iNotebook</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">iNotebook</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Now making notes easy
          </h6>
          <p className="card-text">
            iNotebook is a web app where you can create, delete, update and
            read their notes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
