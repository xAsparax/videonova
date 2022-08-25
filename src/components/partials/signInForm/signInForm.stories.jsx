import React from "react"
import SignInForm from "./signInForm"

export default {
  title: "partials/SignInForm",
  component: SignInForm,
  argTypes: {
    show: { control: "boolean" },
    error: { boolean: { action: false } },
  },
}

export function Primary(args) {
  return (
    <div style={{ width: "644px", height: "861px" }}>
      <SignInForm {...args} />
    </div>
  )
}

Primary.args = {
  show: true,
}

export function Error(args) {
  return (
    <div style={{ width: "644px", height: "861px" }}>
      <SignInForm {...args} />
    </div>
  )
}

Error.args = {
  show: true,
  error: true,
}
