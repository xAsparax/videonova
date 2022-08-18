import React from "react"
import PropTypes from "prop-types"
import Image from "../../primitives/image/image";
import Button from "../../primitives/button/button";
import "./cardUser.css"
import Heading from "../../primitives/heading/heading";

export default function CardUser({ image, title, info, buttonLabel, buttonLink }) {
  return (
    <div className="cardUser">
      <div className="cardUser__image">
        <Image src={image} fit="cover" />
      </div>
      <Heading weight="3" className="cardUser__title">{title}</Heading>
      <div className="cardUser__info">{info}</div>
      <Button
        label={buttonLabel}
        onClick={buttonLink}
        variant="prime"
      />
    </div>
  )
}

CardUser.propTypes = {
  /**
   *User avatar image
   */
  image: PropTypes.string.isRequired,
  /**
   *User name
   */
  title: PropTypes.string.isRequired,
  /**
   *User info
   */
  info: PropTypes.string.isRequired,
  /**
   *Button text
   */
  buttonLabel: PropTypes.string.isRequired,
  /**
   * Button link
   */
  buttonLink: PropTypes.string.isRequired,
}
