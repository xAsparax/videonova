import React from "react"
import "./videoCard.css"
import Heading from "../../primitives/heading/heading"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"

export default function VideoCard ({video, title, text}) {

  return (
    <div className="videoCard">
      <div className="videoCard_videoContainer">
        <ReactPlayer url={video} width="314px" height="178px" light={true} controls={true}/>
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
