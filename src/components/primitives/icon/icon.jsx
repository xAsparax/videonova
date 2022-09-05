import React from "react"
import PropTypes from "prop-types"
import Image from "../image/image"

export default function SocialIcon({ name }) {
  return <Image className="icon-size" src={name} fit="contain" />
}

SocialIcon.propTypes = {
  name: PropTypes.string,
}

SocialIcon.defaultProps = {
  name: undefined,
}
