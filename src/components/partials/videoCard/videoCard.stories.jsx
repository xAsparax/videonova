/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import VideoCard from "./videoCard"

export default {
  title: "partials/videoCard",
  component: VideoCard,
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    video: { control: "text" },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "314px" }}>
      <VideoCard {...args} />
    </div>
  )
}

Primary.args = {
  title: "Sea Shapes",
  text: "A very calm sea under the gentle rays of the sun",
  video: "https://www.youtube.com/watch?v=ZITh-XIikgI",
}
