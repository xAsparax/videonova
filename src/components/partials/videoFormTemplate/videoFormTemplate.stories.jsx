import React from "react"
import VideoFormTemplate from "./videoFormTemplate";

export default {
  title: "partials/videoFormTemplate",
  component: VideoFormTemplate,
  argTypes: {
    show: {control: "boolean"},
  }
}

export function AddVideoForm(args) {
  return <VideoFormTemplate {...args} />
}

AddVideoForm.args = {
  show: true,
}
