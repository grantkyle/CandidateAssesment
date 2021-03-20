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
        <Button
          variant="secondary"
          className="hummer-landing-page__quick-form-button"
        >
          QUICK FORM&nbsp; <i class="far fa-thumbs-up"></i>
        </Button>
      </div>

      <div className="hummer-landing-page__rows hummer-landing-page__cta">
        <div class="row">
          <div class="column hummer-landing-page__cta-text-container">
            <p className="hummer-landing-page__cta-text">
              Want To Be Home This Weekend? With Hummer's 5-Nights-Out
              Positions, You Will Be!
            </p>
          </div>
          <div class="column hummer-landing-page__cta-apply-now-container">
            <div class="hummer-landing-page__cta-apply-now-button-row">
              <div className="hummer-landing-page__cta-apply-now-button-container">
                <Button
                  variant="danger"
                  className="hummer-landing-page__apply-now-button"
                  block
                >
                  APPLY NOW&nbsp;
                  <i className="fas fa-external-link-square-alt"></i>
                </Button>
              </div>
              <div className="hummer-landing-page__cta-phone-number-button-container">
                <Button
                  block
                  variant="secondary"
                  className="hummer-landing-page__phone-number-button"
                >
                  <b>(866)913-1352</b>&nbsp;{" "}
                  <i className="fas fa-phone-square-alt"></i>
                </Button>
              </div>
            </div>
            <div class="hummer-landing-page__cta-apply-now-search-jobs-button-row">
              <div className="hummer-landing-page__cta-search-jobs-button-container">
                <Button
                  variant="dark"
                  className="hummer-landing-page__quick-form-button"
                  block
                >
                  SEARCH JOBS BY AREA&nbsp; <i class="fas fa-search"></i>
                </Button>
              </div>
            </div>
            <div className="column hummer-landing-page__cta-apply-now-paragraph-row">
              <p className="hummer-landing-page__cta-apply-now-paragraph">
                If you're ready to end the home time guessing game, then
                Hummer's CDL-A scheduled regional 5-nights-out truck driving
                positions are for you! Your home time is right there in the job
                title. These scheduled regional driving positions mean you are
                home every weekend, running only where we can be sure that you
                get home on time (typically out mid-day Sunday and back home
                mid-day Friday). Take a closer look at our hiring areas and see
                if this opportunity is right for you - we'd love to have you on
                board!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="column hummer-landing-page__rows hummer-landing-page__info"
        style={{ background: "blue" }}
      >
        <div className="hummer-landing-page__info-image-row">
          <div class="row">
            <div class="column hummer-landing-page__cta-text-container">
              <p className="hummer-landing-page__cta-text">
                Want To Be Home This Weekend? With Hummer's 5-Nights-Out
                Positions, You Will Be!
              </p>
            </div>
            <div class="column hummer-landing-page__cta-apply-now-container">
              <div class="hummer-landing-page__cta-apply-now-button-row">
                <div className="hummer-landing-page__cta-apply-now-button-container">
                  <Button
                    variant="danger"
                    className="hummer-landing-page__apply-now-button"
                    block
                  >
                    APPLY NOW&nbsp;
                    <i className="fas fa-external-link-square-alt"></i>
                  </Button>
                </div>
                <div className="hummer-landing-page__cta-phone-number-button-container">
                  <Button
                    block
                    variant="secondary"
                    className="hummer-landing-page__phone-number-button"
                  >
                    <b>(866)913-1352</b>&nbsp;{" "}
                    <i className="fas fa-phone-square-alt"></i>
                  </Button>
                </div>
              </div>
              <div class="hummer-landing-page__cta-apply-now-search-jobs-button-row">
                <div className="hummer-landing-page__cta-search-jobs-button-container">
                  <Button
                    variant="dark"
                    className="hummer-landing-page__quick-form-button"
                    block
                  >
                    SEARCH JOBS BY AREA&nbsp; <i class="fas fa-search"></i>
                  </Button>
                </div>
              </div>
              <div className="column hummer-landing-page__cta-apply-now-paragraph-row">
                <p className="hummer-landing-page__cta-apply-now-paragraph">
                  If you're ready to end the home time guessing game, then
                  Hummer's CDL-A scheduled regional 5-nights-out truck driving
                  positions are for you! Your home time is right there in the
                  job title. These scheduled regional driving positions mean you
                  are home every weekend, running only where we can be sure that
                  you get home on time (typically out mid-day Sunday and back
                  home mid-day Friday). Take a closer look at our hiring areas
                  and see if this opportunity is right for you - we'd love to
                  have you on board!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hummer-landing-page__arrow-row"
          style={{ background: "red" }}
        >
          Row 3
        </div>
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
