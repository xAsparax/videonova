/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Button from "./button"

export default {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    label: "Button",
    onClick: { control: "text" },
    disabled: { boolean: { action: false } },
    variant: {
      options: ["prime", "transparent"],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  return <Button {...args} />
}

export const ButtonPrimary = Template.bind({})

ButtonPrimary.args = {
  label: "button label",
  variant: "prime",
  onClick: "https://google.com",
  disabled: false,
}

export const ButtonTransparent = Template.bind({})

ButtonTransparent.args = {
  label: "button label",
  variant: "transparent",
  onClick: "https://google.com",
  disabled: false,
}

export const ButtonDisabled = Template.bind({})

ButtonDisabled.args = {
  label: "button label",
  variant: "prime",
  disabled: true,
}
