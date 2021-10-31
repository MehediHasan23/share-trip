import React from "react";
import "./Destination.css";
import img1 from "./../../images/destination-2/dp1.png";
import img2 from "./../../images/destination-2/dp2.png";
import img3 from "./../../images/destination-2/dp3.png";
import img4 from "./../../images/destination-2/dp4.png";
import img5 from "./../../images/destination-2/dp5.png";
import img6 from "./../../images/destination-2/dp6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  return (
    <div className="destination-container">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">POPULAR PLACES</h1>
          <p>
            We all live in an age that belongs to the young at heart. Life that
            is becoming extremely fast, day.
          </p>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <img className="img-fluid" src={img1} alt="" />
            <div className="p-3 desc-container">
              <h4>California</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={img2} alt="" />
            <div className="p-3 desc-container">
              <h4>Korola Megna</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={img3} alt="" />
            <div className="p-3 desc-container">
              <h4>London</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section  */}

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={img4} alt="" />
            <div className="p-3 desc-container">
              <h4>Miami Beach</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={img5} alt="" />
            <div className="p-3 desc-container">
              <h4>California</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={img6} alt="" />
            <div className="p-3 desc-container">
              <h4>Saintmartine Iceland</h4>
              <p>United State of America</p>
              <div className="d-flex justify-content-between">
                <div className="text-warning">
                  <span>
                    <small>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </small>
                  </span>
                  <span className="text-muted">
                    <small>(20 Reviews)</small>
                  </span>
                </div>
                <div>
                  <span className="text-muted mx-2">
                    <small>
                      <FontAwesomeIcon icon={faClock} />
                    </small>
                  </span>
                  <span>
                    <small>5 days</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
