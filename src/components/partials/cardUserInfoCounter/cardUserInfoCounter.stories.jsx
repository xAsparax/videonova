import React from "react"
import CardUserInfoCounter from "./cardUserInfoCounter"
import heart from "../../../assets/icons/heart.png"
import video from "../../../assets/icons/video-square.png"

export default {
  title: "partials/cardUserInfoCounter",
  component: CardUserInfoCounter,
  argTypes: {
    counter: {
      control: { type: 'number', min:0, step: 1 }
    },
    text: {
      options: ["videos", "likes"],
      control: { type: "radio" },
    },
    icon: { control: "text" },
  },
}

export function Likes(args) {
  return <CardUserInfoCounter {...args} />
}

Likes.args = {
  icon: heart,
  text: "likes",
}

export function Videos(args) {
  return <CardUserInfoCounter {...args} />
}

Videos.args = {
  icon: video,
  text: "videos",
}
