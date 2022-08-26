import React from "react"
import AddVideoBlock from "./addVideoBlock"

export default {
  title: "partials/addVideoBlock",
  component: AddVideoBlock,
  argTypes: {
    loading: { control: "boolean" },
  }
}

export function VideoLoading(args) {
  return <AddVideoBlock {...args}/>
}

VideoLoading.args = {
  loading: true,
}

export function VideoLoaded(args) {
  return <AddVideoBlock {...args}/>
}

VideoLoaded.args = {
  loading: false,
}
