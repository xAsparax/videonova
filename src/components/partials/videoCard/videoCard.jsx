import React from "react"
import "./videoCard.css"
import Heading from "../../primitives/heading/heading"
import PropTypes from "prop-types"
import Image from "../../primitives/image/image"

export default function VideoCard ({video, title, text}) {

  return (
    <div className="videoCard">
      <div className="videoCard_videoContainer">
        <Image src={video} fit="cover"/>
      </div>
      <div className="videoCard_title">
        <Heading weight="3">{title}</Heading>
      </div>
      <div className="videoCard_text">
        {text}
      </div>
      
    </div>
  )
}

VideoCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  video: PropTypes.string,
}

VideoCard.defaultProps = {
  title: undefined,
  text: undefined,
  video: undefined,
}
