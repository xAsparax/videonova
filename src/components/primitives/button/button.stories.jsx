/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Button from "./button"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    label: "Button",
    onClick: {control: "text"},
    disabled: { boolean: { action: false } },
    variant: {
      options: ["prime", "transparent"],
      control: { type: "radio" },
    },
  },
}

export function ButtonPrimary(args) {
  return <Button {...args} />
}

ButtonPrimary.args = {
  label: "button label",
  variant: "prime",
  onClick: "https://google.com",
  disabled: false
}
