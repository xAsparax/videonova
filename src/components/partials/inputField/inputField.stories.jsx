import React from "react"
import InputField from "./inputField"

export default {
  title: "partials/inputField",
  component: InputField,
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    password: { control: "boolean" },
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
  password: false,
  error: false,
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

export function PasswordForm(args) {
  return <InputField {...args} />
}

PasswordForm.args = {
  title: "Youtube link",
  placeholder: "Past link...",
  password: true
}
