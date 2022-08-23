import React from "react"
import InputField from "./inputField"

export default {
  title: "partials/inputField",
  component: InputField,
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    isHidden: { control: "boolean" },
    error: { control: "boolean" },
    helpLabel: { control: "text" },
    helpLink: { control: "text" }
  },
}

export function Primary(args) {
  return <InputField {...args} />
}

Primary.args = {
  title: "Youtube link",
  placeholder: "Past link...",
}

export function Error(args) {
  return <InputField {...args} />
}

Error.args = {
  title: "Youtube link",
  placeholder: "Past link...",
  error: true,
  helpLabel: "Forgot Password?",
  helpLink: "/",
}
