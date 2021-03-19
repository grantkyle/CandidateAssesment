import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";

const LandingPage = () => {
  return (
    <div className="hummer-landing-page__container">
      <div className="hummer-landing-page__rows hummer-landing-page__hero">
        <div className="hummer-landing-page__logo-container">
          <img
            className="hummer-landing-page__logo"
            src="../assets/images/logo.png"
            alt="firstImage"
          ></img>
        </div>
        <h3 className="hummer-landing-page__hero-text">
          CDL-A SCHEDULED REGIONAL TRUCK DRIVER JOBS - 5 NIGHTS OUT ROUTES
        </h3>
        <Button variant="secondary" className="hummer-landing-page__quick-form-button">QUICK FORM&nbsp; <i class="far fa-thumbs-up"></i></Button>
      </div>

      <div
        className="hummer-landing-page__rows hummer-landing-page__cta"
      ></div>

      <div
        className="hummer-landing-page__rows hummer-landing-page__info"
        style={{ background: "blue" }}
      >
        Row 3
      </div>
      <div
        className="hummer-landing-page__rows hummer-landing-page__signup"
        style={{ background: "black" }}
      >
        Row 3
      </div>
    </div>
  );
};

export default LandingPage;
