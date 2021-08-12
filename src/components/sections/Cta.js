import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import emailjs from "emailjs-com";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const innerClasses = classNames(
  //   "cta-inner section-inner",
  //   topDivider && "has-top-divider",
  //   bottomDivider && "has-bottom-divider",
  //   split && "cta-split"
  // );

  useEffect(() => {
    emailjs.init("user_WAd2VAmDaBjN6UAMkwevy");
  }, []);

  const handleSendEmail = () => {
    console.log({ name, email, message });
    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      message,
    };
    emailjs
      .send("service_m4zu9f9", "template_wn44aav", templateParams)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div style={{ marginTop: 48 }}>
          <div className="cta-slogan">
            <h3 className="m-0">Any questions? Contact us!</h3>
          </div>
          <div className="cta-action">
            <Input
              id="fullName"
              placeholder="Your Name"
              style={{ marginBottom: 15 }}
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              style={{ marginBottom: 15 }}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <Input
              id="message"
              type="textarea"
              placeholder="Your Message"
              rows={15}
              style={{ marginBottom: 15 }}
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
            />
            <Button color="primary" wideMobile onClick={handleSendEmail}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
