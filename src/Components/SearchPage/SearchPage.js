import React from "react";
import logo from "./logo.png";
import bg from "./bg.jpg";
import "./SearchPage.css";
import { BiLogIn } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";

const SearchPage = () => {
  return (
    <>
      <section className="position__top">
        <div>
          <img src={logo} alt="" />
        </div>
        <span>RoomMates</span>
      </section>
      <section className="container_search">
        <div className="update__info">
          <div className="icon">
            <BiLogIn style={{ marginRight: "1rem" }} />

            <div>
              <div for="fname" style={{ fontSize: "small", fontWeight: "500" }}>
                Check In
              </div>
              <input
                type="text"
                placeholder="19/12/2022"
                className="date"
                id="fname"
                name="fname"
              />
            </div>
            <div className="line_search" />
            <BsCalendar2Date style={{ marginRight: "1rem" }} />
            <div>
              <div for="fname" style={{ fontSize: "small", fontWeight: "500" }}>
                Nights
              </div>
              <input
                type="text"
                placeholder="4"
                className="date"
                id="fname"
                name="fname"
              />
            </div>
            <div className="line" />
            <GiPerson />
            <div>
              <div for="fname" style={{ fontSize: "small", fontWeight: "500" }}>
                Adult
              </div>
              <input
                type="text"
                placeholder="1"
                className="date"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <button type="button" class="button__update btn btn-outline-dark">
            Change Dates
          </button>
        </div>
        <div className="search__card">
          <div
            id="carouselExampleIndicators"
            class="carousel slide image__slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="next__button__position">
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container__2">
          <span>Single Room</span>
          

        </div>
        </div>
        <div className="search__card">
          <div
            id="carouselExampleIndicators"
            class="carousel slide image__slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="next__button__position">
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container__2">
          <span>Single Room</span>
          

        </div>
        </div>
        <div className="search__card">
          <div
            id="carouselExampleIndicators"
            class="carousel slide image__slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="next__button__position">
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container__2">
          <span>Single Room</span>
          

        </div>
        </div>
        <div className="search__card">
          <div
            id="carouselExampleIndicators"
            class="carousel slide image__slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bg} class="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="next__button__position">
              <button
                class="carousel-control-prev "
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container__2">
          <span>Single Room</span>
          

        </div>
        </div>
        
      </section>
    </>
  );
};

export default SearchPage;
