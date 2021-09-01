import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";

const PricingCard = ({ details: { title, description, features, price } }) => {
  return (
    <div className="tiles-item reveal-from-right" data-reveal-delay="200">
      <div className="tiles-item-inner">
        <div className="testimonial-item-title">{title}</div>
        <div className="testimonial-item-subtitle">{description}</div>
        <div className="testimonial-item-content">
          {(features || []).map((el) => (
            <div key={el.name} className="testimonial-feature-wrapper">
              {!el.exists ? (
                <FontAwesomeIcon
                  className="pricing-icon"
                  icon={faTimesCircle}
                  color="red"
                />
              ) : (
                <FontAwesomeIcon
                  className="pricing-icon"
                  icon={faCheckCircle}
                  color="green"
                />
              )}
              {el.name}
            </div>
          ))}
        </div>
        <div className="testimonial-item-footer text-s mt-32 mb-0 has-top-divider">
          {Number.isNaN(parseFloat(price)) ? (
            <Link
              to="contact"
              style={{ textDecoration: "underline", color: "#d4af37" }}
            >
              {price}
            </Link>
          ) : (
            <span className="testimonial-item-name text-color-high">
              {Number.isNaN(parseFloat(price)) ? "" : "$"}
              {price}
            </span>
          )}
          {/* <span className="text-color-low"> / </span>
          <span className="testimonial-item-link">
            <a href="#0">AppName</a>
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
