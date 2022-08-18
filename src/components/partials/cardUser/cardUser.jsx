import React from "react"
import PropTypes from "prop-types"
import Image from "../../primitives/image/image";
import Button from "../../primitives/button/button";
import "./cardUser.css"
import Heading from "../../primitives/heading/heading";
import CardUserInfoCounter from "../cardUserInfoCounter/cardUserInfoCounter";
import videoIcon from "../../../assets/icons/video-square.png"
import heartIcon from "../../../assets/icons/heart.png"

export default function CardUser({ image, title, likesValue, videosValue, buttonLabel, buttonLink }) {
  return (
    <div className="cardUser">
      <div className="cardUser__image">
        <Image src={image} fit="cover" />
      </div>
      <Heading weight="3" className="cardUser__title">{title}</Heading>
      <div className="cardUser__info">
        <CardUserInfoCounter icon={videoIcon} text="videos" counter={videosValue}/>
        <CardUserInfoCounter icon={heartIcon} text="likes" counter={likesValue}/>
      </div>
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
   *Likes counter
   */
  likesValue: PropTypes.number,
  /**
   *Videos counter
   */
  videosValue: PropTypes.number,
  /**
   *Button text
   */
  buttonLabel: PropTypes.string.isRequired,
  /**
   * Button link
   */
  buttonLink: PropTypes.string.isRequired,
}

CardUser.defaultProps = {
  videosValue: undefined,
  likesValue: undefined
}
