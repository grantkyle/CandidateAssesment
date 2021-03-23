import React from "react";
import Cookies from "universal-cookie";
import { Button, Form } from "react-bootstrap";
import "./styles.scss";

const LandingPage = () => {
  const cookies = new Cookies();

  const days = 30;
  const expiration = new Date();
  expiration.setTime(expiration.getTime() + days * 24 * 60 * 60 * 1000);
  cookies.set(
    "hummerCookie",
    "Hello CIA!",
    { path: "/" },
    { expiration: expiration }
  );
  console.log(cookies.get("hummerCookie"), "Cookie expires on " + expiration);

  return (
    <div className="hummer-landing-page__container">
      <div className="hummer-landing-page__hero-row">
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
          QUICK FORM&nbsp; <i className="far fa-thumbs-up"></i>
        </Button>
      </div>

      <div className="hummer-landing-page__cta-row">
        <div className="hummer-landing-page__cta-row-big-text-container">
          <p className="hummer-landing-page__cta-row-big-text">
            Want To Be Home This Weekend? With Hummer's 5-Nights-Out Positions,
            You Will Be!
          </p>
        </div>
        <div className="hummer-landing-page__cta-row-button-and-text-container">
          <Button
            variant="danger"
            className="hummer-landing-page__apply-now-button"
          >
            APPLY NOW&nbsp;
            <i className="fas fa-external-link-square-alt"></i>
          </Button>
          <Button
            variant="secondary"
            className=" hummer-landing-page__phone-number-button"
          >
            <b>832-913-1352</b>&nbsp;{" "}
            <i className="fas fa-phone-square-alt"></i>
          </Button>

          <Button
            variant="dark"
            className="hummer-landing-page__search-jobs-button"
          >
            SEARCH JOBS BY AREA&nbsp; <i className="fas fa-search"></i>
          </Button>
          <div className="hummer-landing-page__apply-now-paragraph-container">
            <p className="hummer-landing-page__apply-now-paragraph">
              If you're ready to end the home time guessing game, then Hummer's
              CDL-A scheduled regional 5-nights-out truck driving positions are
              for you! Your home time is right there in the job title. These
              scheduled regional driving positions mean you are home every
              weekend, running only where we can be sure that you get home on
              time (typically out mid-day Sunday and back home mid-day Friday).
              Take a closer look at our hiring areas and see if this opportunity
              is right for you - we'd love to have you on board!
            </p>
          </div>
        </div>
      </div>
      <div className="hummer-landing-page__info-row-container">
        <div className="hummer-landing-page__info-row">
          <div className="hummer-landing-page__info-row-image-container">
            <img
              className="hummer-landing-page__info-row-image"
              src="../assets/images/trucker.jpg"
              alt="hummer-trucker"
            ></img>
          </div>
          <div className="hummer-landing-page__info-row-text-container">
            <div className="hummer-landing-page__info-row-text">
              <b>
                Hummer's CDL A Scheduled Regional 5 nights-out truck driver
                positions offer:
              </b>
              <br />
              <br />
              <ul>
                <li>
                  5 Nights Out on the road, followed by 2 consecutive nights at
                  home every week
                </li>
                <li>
                  No guesswork - Drivers will know dispatch time before they are
                  done for the week on Friday.
                </li>
                <li>
                  Hiring area limited to where freight patterns allow for home
                  time commitments to be met - ask for details!
                </li>
                <li>
                  Starting pay based on most recent six years of work history.
                </li>
                <li>
                  Annual pay increases through the first seven years, then again
                  at ten years.
                </li>
                <li>
                  Benefits, bonus programs and too many advantages to list here!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hummer-landing-page__info-row-arrow">
          <i
            className="fas fa-3x fa-chevron-down"
            style={{ color: "#8b0000", paddingTop: "10px" }}
          ></i>
        </div>
      </div>
      <div className="hummer-landing-page__signup-row">
        <div className="hummer-landing-page__signup-row-cta">
          Run Hard, Get Home, Get Paid - It's That Simple At Hummer Trucking.
          Learn More Today!
        </div>
      </div>
      <div className="hummer-landing-page__signup-row-form-container">
        <Form>
          <div className="hummer-landing-page__signup-row-input-cluster">
            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="firstName">
                <Form.Control size="sm" type="text" placeholder="First Name" />
              </Form.Group>
            </div>

            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="Phone Number"
                />
              </Form.Group>
            </div>
            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="city">
                <Form.Control size="sm" type="email" placeholder="City" />
              </Form.Group>
            </div>
          </div>
          <div
            style={{ paddingBottom: "40px" }}
            className="hummer-landing-page__signup-row-input-cluster"
          >
            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="lastName">
                <Form.Control size="sm" type="email" placeholder="Last Name" />
              </Form.Group>
            </div>

            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="email">
                <Form.Control size="sm" type="email" placeholder="Email" />
              </Form.Group>
            </div>

            <div className="hummer-landing-page__signup-row-input">
              <Form.Group controlId="state">
                <Form.Control size="sm" as="select" defaultValue="Choose...">
                  <option>State</option>
                  <option>All the states</option>
                </Form.Control>
              </Form.Group>
              <Button
                className="hummer-landing-page__signup-row-button"
                style={{ float: "left", marginTop: "10px" }}
                variant="danger"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div className="hummer-landing-page__rows hummer-landing-page__privacy-policy-row">
        Privacy Policy
      </div>
    </div>
  );
};

export default LandingPage;
