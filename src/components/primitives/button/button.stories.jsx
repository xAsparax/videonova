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
    loading: { boolean: { action: false } },
  },
}

function Template(args) {
  return <Button {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  label: "button label",
  variant: "prime",
  onClick: "https://youtube.com",
  disabled: false,
  loading: false,
}

export const ButtonTransparent = Template.bind({})

ButtonTransparent.args = {
  ...Primary.args,
  variant: "transparent",
}

export const ButtonDisabled = Template.bind({})

ButtonDisabled.args = {
  ...Primary.args,
  disabled: true,
}

export const ButtonLoading = Template.bind({})

ButtonLoading.args = {
  ...Primary.args,
  loading: true,
}
