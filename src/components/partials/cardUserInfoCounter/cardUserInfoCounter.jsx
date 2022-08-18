import React from "react"
import PropTypes from "prop-types"
import "./cardUserInfoCounter.css"
import Image from "../../primitives/image/image";

export default function CardUserInfoCounter({icon, text, counter}) {
  return (
    <div className="cardUserInfoCounter">
      <div className="icon_block">
      <Image src={icon} />
      </div>
      <span className="counter_block">{counter}</span>
      <span>{text}</span>
    </div>
  )
}

CardUserInfoCounter.PropTypes = {
  /**
   *Icon source
   */
  icon: PropTypes.string.isRequired,
  /**
   *Counter
   */
  counter: PropTypes.number,
  /**
   *Counter content
   */
  text: PropTypes.oneOf(["videos", "likes"]),
}

CardUserInfoCounter.defaultProps = {
  counter: undefined,
}
