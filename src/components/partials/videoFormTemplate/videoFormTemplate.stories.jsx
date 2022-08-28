import React from "react"
import VideoFormTemplate from "./videoFormTemplate";

export default {
  title: "partials/videoFormTemplate",
  component: VideoFormTemplate,
  argTypes: {
    show: {control: "boolean"},
    isVideoForm: {control: "boolean"},
  }
}

export function AddVideoForm(args) {
  return <VideoFormTemplate {...args} />
}

AddVideoForm.args = {
  show: true,
  isVideoForm: true,
}

export function AddVideoBlock(args) {
  return <VideoFormTemplate {...args} />
}

AddVideoBlock.args = {
  show: true,
  isVideoForm: false,
}
