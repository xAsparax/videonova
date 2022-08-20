import React from "react"
import InputField from "./inputField"

export default {
  title: "partials/inputField",
  component: InputField,
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    isHidden:  { control: 'boolean' },
  },
}

export function Primary(args) {
  return <InputField {...args} />
}

Primary.args = {
  title: "Youtube link",
  placeholder: "Past link...",
}
