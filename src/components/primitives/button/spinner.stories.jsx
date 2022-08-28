import React from "react"
import Spinner from "./spinner"

export default {
  title: "primitives/spinner",
  component: Spinner,
  argTypes: {
    big: { control: "boolean" },
  }
}

export function SmallSpinner(args) {
  return <Spinner {...args}/>
}

SmallSpinner.args = {
}

export function BigSpinner(args) {
  return <Spinner {...args}/>
}

BigSpinner.args = {
  big: true,
}
