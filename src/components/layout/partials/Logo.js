import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";
import logoImage from "../../../assets/images/logo_whitetext_transparent.png";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <Image src={logoImage} alt="Open" height={40} width={200} />
    </div>
  );
};

export default Logo;
